#!/bin/bash  -x

read -p "Enter N : " n

harmony=1.0
for ((i=2; i<=n; i++))
do
    curVal=$(echo "scale=2;1 / $i" | bc)
    harmony=$(echo "scale=2;$harmony + $curVal" | bc)
done

echo $harmony