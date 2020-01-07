#!/bin/bash  -x

for i in `seq 10`
do
    arr[$i]=$((RANDOM % 1000))
done

echo Array = ${arr[@]}

n=${#arr[@]}
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

echo Sorted Array = ${arr[@]}


echo Second Smallest = ${arr[2]}
echo Second Largest = ${arr[$((n - 1))]}
