#!/bin/bash  -x

read -p "Enter Number : " n


for _ in `seq $n`
do
    read num
    flag=1
    for((i=2; i<=$(bc <<< "scale=0; sqrt($num)"); i++))
    do
    if [ $(($num%i)) -eq 0 ]
    then
       flag=0
    fi
    done
    if [[ flag -eq 1 ]]
    then
        echo "$num is a prime number"
    else
        echo "$num is not a prime number"
    fi
done