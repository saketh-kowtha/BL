#!/bin/bash  -x

clear

function indexToOpt(){
    case $1 in 
        "0,0"*)  echo 1;;
        "0,1"*)  echo 2;;
        "0,2"*)  echo 3;;
        "1,0"*)  echo 4;;
        "1,1"*)  echo 5;;
        "1,2"*)  echo 6;;
        "2,0"*)  echo 7;;
        "2,1"*)  echo 8;;
        "2,2"*)  echo 9;;
    esac
}

case $((RANDOM % 2)) in 
    0) playerSymbol="X";;
    1) playerSymbol="O";;
esac

declare -A matrix

matrix[0,0]=" "
matrix[0,1]=" "
matrix[0,2]=" "
matrix[1,0]=" "
matrix[1,1]=" "
matrix[1,2]=" "
matrix[2,0]=" "
matrix[2,1]=" "
matrix[2,2]=" "

function printBoard(){
    cellId=1
    for ((i=0; i<3; i++))
    do
        for ((j=0;j<3;j++))
        do
            if [ "${matrix[$i,$j]}" == " " ]
            then
                echo -ne "$cellId\t"
            else
                echo -ne "${matrix[$i,$j]}\t"
            fi
            ((cellId++))
        done
        echo -ne "\n"
    done
}

function isWinning(){
    symbol=$1

    if [ "${matrix[0,0]}" == "${matrix[1,1]}" ]  && [ "${matrix[0,0]}" == "$symbol" ] && [ "${matrix[2,2]}" == " " ]
    then
        echo "2,2"
        return
    elif [ "${matrix[2,2]}" == "${matrix[1,1]}" ]  && [ "${matrix[2,2]}" == "$symbol" ] && [ "${matrix[0,0]}" == " " ]
    then
        echo "0,0"
        return
    elif [ "${matrix[2,2]}" == "${matrix[0,0]}" ]  && [ "${matrix[2,2]}" == "$symbol" ] && [ "${matrix[1,1]}" == " " ]
    then
        echo "1,1"
        return
    fi

    if [ "${matrix[0,2]}" == "${matrix[1,1]}" ]  && [ "${matrix[0,2]}" == "$symbol" ] && [ "${matrix[2,0]}" == " " ]
    then
        echo "2,0"
        return
    elif [ "${matrix[2,0]}" == "${matrix[1,1]}" ]  && [ "${matrix[2,0]}" == "$symbol" ] && [ "${matrix[0,2]}" == " " ]
    then
        echo "0,2"
        return
    elif [ "${matrix[2,0]}" == "${matrix[0,2]}" ]  && [ "${matrix[2,0]}" == "$symbol" ] && [ "${matrix[1,1]}" == " " ]
    then
        echo "1,1"
        return
    fi

    for ((i=0; i < 3; i++))
    do
        if [[ ( "${matrix[$i,0]}" == "${matrix[$i,1]}" ) &&  "${matrix[$i,0]}" == "$symbol"  ]] || [[ ( "${matrix[$i,1]}" == "${matrix[$i,2]}" ) && "${matrix[$i,1]}" == "$symbol" ]] ||  [[ ( "${matrix[$i,0]}" == "${matrix[$i,2]}" ) && "${matrix[$i,2]}" == "$symbol" ]]
        then
            for ((j=0; j<3; j++))
            do
                if [ "${matrix[$i,$j]}" == " " ]
                then
                    echo "$i,$j"
                    return
                fi
            done
        fi
    done

    for ((i=0; i < 3; i++))
    do
        if [[ ( "${matrix[0,$i]}" == "${matrix[1,$i]}" && "${matrix[0,$i]}" == "$symbol" ) ]] || [[ ( "${matrix[1,$i]}" == "${matrix[2,$i]}" ) && "${matrix[1,$i]}" == "$symbol" ]] ||  [[ ( "${matrix[0,$i]}" == "${matrix[2,$i]}" ) && "${matrix[2,$i]}" == "$symbol" ]]
        then
            for ((j=0; j<3; j++))
            do
                if [ "${matrix[$j,$i]}" == " " ]
                then
                    echo "$j,$i"
                    return
                fi
            done
        fi
    done

    echo null
}

checkRows(){
    for ((i=0; i < 3; i++))
    do
        if [ "${matrix[$i,0]}" == "${matrix[$i,1]}" ] && [ "${matrix[$i,1]}" == "${matrix[$i,2]}" ]  && [ "${matrix[$i,0]}" != " " ]
        then
            echo true
            return
        fi
    done
    echo false
}

checkColumn(){
    for ((i=0; i < 3; i++))
    do
        if [ "${matrix[0,$i]}" == "${matrix[1,$i]}" ] && [ "${matrix[1,$i]}" == "${matrix[2,$i]}" ] && [ "${matrix[0,$i]}" != " " ]
        then
            echo true
            return
        fi
    done
    echo false
}

checkDiagonals(){
    if [ "${matrix[0,0]}" == "${matrix[1,1]}" ] && [ "${matrix[2,2]}" == "${matrix[1,1]}" ] && [ "${matrix[0,0]}" != " " ] 
    then
        echo true
        return
    fi
    if [ "${matrix[0,2]}" == "${matrix[1,1]}" ] && [ "${matrix[2,0]}" == "${matrix[1,1]}" ] && [ "${matrix[2,0]}" != " " ]
    then
        echo true
        return
    fi
    echo false
}

isGameOver(){
    if [ "$(checkRows)" != "true" ] && [ "$(checkColumn)" != "true" ] && [ "$(checkDiagonals)" != "true" ]
    then
        echo false
        return
    fi
    local count=0
    for ((i=0; i<3; i++))
    do
        row=""
        col=""
        for ((j=0; j< 3; j++))
        do
            if [ "${matrix[$i,$j]}" != " " ]
            then
                row+=${matrix[$i,$j]}
            fi

            if [ "${matrix[$j,$i]}" != " " ]
            then
                col+=${matrix[$j,$i]}
            fi
        done
        if [[ "$row" =~ ^(XO|OX)$ ]] && [[ "$row" =~ ^(XO|OX)$ ]]
        then
            count=$((count+2))
        fi
    done

    local dig=""
    for ((i=0; i < 3; i++))
    do
        if [ "${matrix[$i,$i]}" != " " ]
        then
            dig+=${matrix[$i,$i]}
        fi
    done
    if [[ "$dig" =~ ^(XO|OX)$ ]]
    then
        ((count++))
    fi

    dig=""
    for ((i=0; i<3;i++))
    do
        for ((j=2;j>=0;j--))
        do
            if [ "${matrix[$j,$i]}" != " " ]
            then
                dig+=${matrix[$j,$i]}
            fi
        done
    done

    if [[ "$dig" =~ ^(XO|OX)$ ]]
    then
        ((count++))
    fi

    if [ $count -eq 8 ]
    then
        echo false
    fi
    echo true
}

isCornerAvailable(){
    for ((i=0; i < 3;i=i+2))
    do
        for ((j=0; j < 3;j=j+2))
        do
            if [ "${matrix[$i,$j]}" == " " ]
            then
                echo $i,$j
                return
            fi
        done
    done
    echo null
}

emptyFeild(){
    for ((i=0;i<3;i++))
    do
        for ((j=0;j<3;j++))
        do
            if [ "${matrix[$i,$j]}" == " " ]
            then
                echo $i,$j
                return 
            fi
        done
    done
    echo null
}

index=$((RANDOM%2))
echo "Your Symbol is $playerSymbol"
while [ $(isGameOver) != "true" ] && [ $index -lt 9 ]
do
    printBoard
    case $((index % 2)) in 
        0) turn="O" ;;
        1) turn="X" ;;
    esac

    if [ "$turn" == "$playerSymbol" ] 
    then
        read -p "Enter your position '$turn' : " pos
    else
        myMove="$(isWinning $turn)"
        # echo $myMove $turn
        if [ "$myMove" != "null" ]
        then
            pos="$(indexToOpt $myMove)"
        else
            myMove="$(isWinning $playerSymbol)"
            # echo $myMove $turn
            if [ "$myMove" != "null" ]
            then
                pos="$(indexToOpt $myMove)"
            else 
                myMove="$(isCornerAvailable)"
                # echo $myMove $turn
                if [ "$myMove" != "null" ]
                then
                    pos="$(indexToOpt $myMove)"
                else
                    myMove="$(emptyFeild)"
                    # echo $myMove $turn
                    pos="$(indexToOpt $myMove)"
                fi
            fi
        fi

        echo "$turn Position is $pos"
    fi


    if [ -v completedMoves[$pos] ]
    then
        echo "Invalid Move"
        continue
    fi
    completedMoves[$pos]="true"
    case $pos in 
        1) matrix[0,0]=$turn;;
        2) matrix[0,1]=$turn;;
        3) matrix[0,2]=$turn;;
        4) matrix[1,0]=$turn;;
        5) matrix[1,1]=$turn;;
        6) matrix[1,2]=$turn;;
        7) matrix[2,0]=$turn;;
        8) matrix[2,1]=$turn;;
        9) matrix[2,2]=$turn;;
        *) echo "Invalid Choice"; continue ;;
    esac
    ((index++))
done

printBoard
if [ $(isGameOver) == "false" ]
then
    echo "TIE"
else
    echo $turn Won the game
fi
