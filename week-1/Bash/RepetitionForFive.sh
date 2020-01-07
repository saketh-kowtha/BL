#!/bin/bash  -x

read -p "Enter Number : " n

fact=1
for ((i=2;i<=n;i++))
do
    fact=$((fact * i))
done

echo "$fact is Factorial for $n" 