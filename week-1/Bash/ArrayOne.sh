#!/bin/bash  -x

max=0
min=0


for i in `seq 10`
do
    arr[$i]=$((RANDOM % 1000))
done

echo ${arr[@]}

for i in `seq 10`
do
  num=${arr[$i]}
  if [ $i -eq 1 ] 
  then
      max=$num
      min=$num
  else            
      if [ $num -gt $max ]
      then
        smax=$max
        max=$num
      fi
      if [ $num -lt $min ]
      then
        smin=$min
        min=$num
      fi
  fi
done

echo Second Maximun : $smax and Second Minimum : $smin

