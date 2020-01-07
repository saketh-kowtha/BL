#!/bin/bash  -x

read -p "Enter Number : " n

for((i=2; i<=$(bc <<< "scale=0; sqrt($n)"); i++))
do
  if [ $((n%i)) -eq 0 ]
  then
    echo "$n is not a prime number"
    exit 0
  fi
done
echo "$n is a prime number"