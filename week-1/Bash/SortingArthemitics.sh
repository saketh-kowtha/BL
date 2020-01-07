#!/bin/bash  -x

read -p "Enter A B C : " a b c

declare -A dict

dict["a + b * c"]=$((a + b * c))

dict["a * b + c"]=$((a * b + c))

dict["c + a / b"]=$((c + a / b))

dict["a % b + c"]=$((a % b + c))

function sort(){
    local n=${#arr[@]}
    for ((i = 0; i<$((n)); i++)) 
    do
        for ((j = 0; j<$((n-i)); j++)) 
        do
            if [[ ${arr[j]} -gt ${arr[$((j+1))]} ]]
            then
                temp=${arr[$j]} 
                arr[$j]=${arr[$((j+1))]}   
                arr[$((j+1))]=$temp 
            fi
        done
    done
}


function rsort(){
    local n=${#arr[@]}
    for ((i = 0; i<$((n)); i++)) 
    do
        for ((j = 0; j<$((n-i)); j++)) 
        do
            if [[ ${arr[j]} -lt ${arr[$((j+1))]} ]]
            then
                temp=${arr[$j]} 
                arr[$j]=${arr[$((j+1))]}   
                arr[$((j+1))]=$temp 
            fi
        done
    done
}

count=0

for i in "${!dict[@]}"
do
    arr[$count]=${dict[$i]}
    echo "$i => ${dict[$i]}"
    ((count++))
done


sort


echo Sorted : ${arr[@]}

rsort

echo Reverse Sorted : ${arr[@]}


