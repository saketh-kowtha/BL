#!/bin/bash  -x

isPrime(){
    local num=$1
    flag=1
    for((i=2; i<=$(bc <<< "scale=0; sqrt($num)"); i++))
    do
    if [ $(($num%i)) -eq 0 ]
    then
       flag=0
    fi
    done
}

read -p "Enter N : " n


count=1
for ((j=2;j<n;j++))
do
    if [ $(($n%$j)) -eq 0 ]
    then
        isPrime $j
        if [[ $flag -eq 1 ]]
        then
            arr[$count]=$j
            ((count++))
        fi
    fi
done

for i in ${arr[@]}
do
    echo $i
done