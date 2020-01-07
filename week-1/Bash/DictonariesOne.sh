#!/bin/bash  -x

function isAnyTen(){
    eval "declare -A arg_array="${1#*=}
    for i in "${!arg_array[@]}"; do
        if [ "${arg_array[$i]}" -eq 10 ]
        then
            echo true
            return 0
        fi
    done
    echo false
}

function max(){
    eval "declare -A arg_array="${1#*=}
    local max=-1
    local maxValIndex
    for i in "${!arg_array[@]}"; do
        if [ "${arg_array[$i]}" -gt $max ]
        then
            max="${arg_array[$i]}"
            maxValIndex=$i
        fi
    done
    echo "'$maxValIndex' => $max"
}

function min(){
    eval "declare -A arg_array="${1#*=}
    local min=7
    local minValIndex
    for i in "${!arg_array[@]}"
     do
        if [ "${arg_array[$i]}" -lt $min ]
        then
            min="${arg_array[$i]}"
            minValIndex=$i
        fi
    done
    echo "'$minValIndex' => $min"
}

declare -A list=(
    ['1']=0
    ['2']=0
    ['3']=0
    ['4']=0
    ['5']=0
    ['6']=0
)



while [ $(isAnyTen "$(declare -p list)") != "true" ]
do
    rand=$((1 + RANDOM%6))
    list[$rand]=$((${list[$rand]} + 1))
done

for i in ${!list[@]}
do
    echo "Number $i Won ${list[$i]}"
done

echo Winner : $(max "$(declare -p list)")
echo Looser : $(min "$(declare -p list)")
