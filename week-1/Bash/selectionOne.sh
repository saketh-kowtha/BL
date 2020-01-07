#!/bin/bash  -x

max=0
min=0
for i in `seq 5`
do
  read -p "Enter number ($i) : " num
  if [ $i -eq 1 ] 
  then
      max=$num
      min=$num
  else            
      if [ $num -gt $max ]
      then
        max=$num
      fi
      if [ $num -lt $min ]
      then
        min=$num
      fi
  fi
done

echo Maximun : $max and Minimum : $min

