#!/bin/bash  -x

echo Choose a number between 1 - 100

right=100
left=0

while [ $left -lt $right ] && [ $((right - left)) -ne 1 ]
do
    
    read -p "Is It greater than $(( (right + left) /2)) ? [y/n] : " ans
    if [ $ans == "y" ]
    then
        left=$(( (left + right) /2))
    else
        right=$(( (left + right) /2))
    fi
done


echo $((right)) is your number