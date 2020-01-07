#!/bin/bash  -x

read -p "Enter A : " a
read -p "Enter B : " b
read -p "Enter C : " c

if [ $a -gt $b ] && [ $a -gt $c ]
then
    echo $a is Maximum
elif [ $b -gt $a ] && [ $b -gt $c ]
then
    echo $b is Maximum
else
    echo $c is Maximum
fi

if [ $a -lt $b ] && [ $a -lt $c ]
then
    echo $a is Minimum
elif [ $b -lt $a ] && [ $b -lt $c ]
then
    echo $b is Minimum
else
    echo $c is Minimum
fi

echo "a + b * c = " $(($a + $b * $c))

echo "c + a / b = " $(($c + $a / $b))

echo "a % b + c = " $(($a % $b + $c))

echo "a * b + c = " $(($a * $b + $c))
