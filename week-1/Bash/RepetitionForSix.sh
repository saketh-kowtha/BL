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

count=0
for ((j=2;j<n;j++))
do
    if [ $(($n%$j)) -eq 0 ]
    then
        isPrime $j
        if [[ $flag -eq 1 ]]
        then
            echo $j
            count=$((count + 1))
        fi
    fi
done

if [[ $count -eq 0 ]]
then
    echo No Factors 
fi