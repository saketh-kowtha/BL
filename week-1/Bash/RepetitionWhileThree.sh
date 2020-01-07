#!/bin/bash  -x

heads=0
tails=0

while [ $heads -ne 11 ] && [ $tails -ne 11 ]
do
    rand=$((RANDOM % 2))
    if [ $rand -eq 0 ]
    then
        ((heads++))
    else
        ((tails++))
    fi
    echo "Heads -> $heads and Tail -> $tails"
done

echo $((heads > tails ? "Heads Won" : "Tail Won"))