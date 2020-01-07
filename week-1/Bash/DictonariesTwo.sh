#!/bin/bash  -x

n=0

function indexOf(){
    local month=$2
    eval "declare -A arg_array="${1#*=}
    for i in "${!arg_array[@]}"
    do
        if [ $month == ${arg_array[$i]} ]
        then
            echo $i
            return 0
        fi
    done
    echo NULL
}

declare -A cal
while [[ $n -lt 50 ]]
do
    year=$((RANDOM%2 + 92))
    month=$((RANDOM%12))
    cal[$year, $month]=$((${cal[$year, $month]} + 1))
    ((n++))
done

months=(
    ["0"]="January"
    ["1"]="February"
    ["2"]="March"
    ["3"]="April"
    ["4"]="May"
    ["5"]="June"
    ["6"]="July"
    ["7"]="August"
    ["8"]="September"
    ["9"]="October"
    ["10"]="November"
    ["11"]="December"
)


echo Total List :

for ((i=92;i<94;i++))
do
    echo "=========>19$i<========="
    for ((j=0;j<10;j++))
    do
        if test -z  "${cal[$i, $j]}" 
        then
            echo "${months[$j]} 0"
        else
            echo "${months[$j]} ${cal[$i, $j]}"
        fi
    done
done

read -p "Enter Month [ Ex: January... ] : " ipMonth

monthIndex=$(indexOf "$(declare -p months)" $ipMonth)



if [ $monthIndex != "NULL" ] 
then
    if test -z "${cal['92', $monthIndex]}"
    then
        echo "$ipMonth - 1992 : No Births"
    else
        echo "$ipMonth - 1992 : ${cal['92', $monthIndex]} Born"
    fi

    if test -z "${cal['93', $monthIndex]}"
    then
        echo "$ipMonth - 1993 : No Births"
    else
        echo "$ipMonth - 1993 : ${cal['93', $monthIndex]} Born"
    fi
else
    echo Invalid Month name Try again....
fi



