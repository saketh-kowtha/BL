#!/bin/bash  -x

count=1

read -p "Number of Random Numbers You need : " n

declare -A alpha

index=0
for letter in {A..Z} ; do
  alpha[$index]=$letter
  ((index++))
done

for i in `shuf -i 1000000-9999999 -n $n`
do
    echo "${alpha[$((RANDOM%26))]}${alpha[$((RANDOM%26))]}${alpha[$((RANDOM%26))]}${alpha[$((RANDOM%26))]}$i"
done

echo Total Random Numbers Generated : $(($n * 5))
