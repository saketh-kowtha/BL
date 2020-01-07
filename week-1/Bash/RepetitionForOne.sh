#!/bin/bash  -x

read -p "Enter N : " n

for (( i=1; i<=$n; i++ ))
do
    echo "2 ^ $i = $((n ** i))"
done