#!/bin/bash  -x

read -p "Enter N : " n

for i in `seq $n`
do
    read ele
    arr[$i]=$ele
done


count=0
for ((i=1; i <= $(($n - 2)); i++))
do
    if [[ $(( ${arr[$i]} + ${arr[$(($i + 1))]} + ${arr[$(($i + 2))]} )) -eq 0 ]]
    then
        echo  "${arr[$i]} -> ${arr[$(($i + 1))]} -> ${arr[$(($i + 2))]}"
        ((count++))
    fi
done

if [[ $count -eq 0 ]]
then
    echo No Sum of three == 0
fi