#!/bin/bash  -x

read -p "Enter Number : " n

tmp=$n
rev=0
while [ $n -gt 0 ]
do
    rev=$(( rev * 10 +  n % 10))
    n=$((n/10))
done


if [[ $rev -eq $tmp ]]
then
    echo Pallindrome
else
    echo Not a Pallindrome
fi