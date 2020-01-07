#!/bin/bash  -x

read -p "Enter A Value : " a
read -p "Enter B Value : " b
read -p "Enter B Value : " c

echo "a + b * c = " $(($a + $b * $c))

echo "c + a / b = " $(($c + $a / $b))

echo "a % b + c = " $(($a % $b + $c))

echo "a * b + c = " $(($a * $b + $c))

