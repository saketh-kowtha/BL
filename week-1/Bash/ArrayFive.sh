#!/bin/bash  -x
n=1
counter=1
while [ $n -gt 0 ] && [ $n -lt 100 ]
do
    tmp=$n
    rev=0
    while [ $tmp -gt 0 ]
    do
        rev=$(( rev * 10 +  tmp % 10))
        tmp=$((tmp/10))
    done

    if [ $n -gt 9 ] && [[ $rev -eq $n ]]
    then
        arr[$counter]=$n
        ((counter++))
    fi
    ((n++))
done

echo ${arr[@]}