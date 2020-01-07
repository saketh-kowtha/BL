#!/bin/bash  -x

#1. Getting Signle digit random number
RAND=$((RANDOM % 10))

#2. Getting random number between 1 and 6
DIE_VAL=$((1 + RANDOM % 6))

#3. Adding two random Dies
DIE_ONE_VAL=$((1 + RANDOM % 6))
DIE_TWO_VAL=$((1 + RANDOM % 6))

echo Sum Of Two Dies  =  $((DIE_ONE_VAL + DIE_TWO_VAL))

#4. Sum and average of 5 double digit random numbers
sum=0
count=0
for i in `seq 5`
do
    RAND=$((RANDOM % 100))
    sum=$((RANDOM + i))
    count=$((count + 1))
done

echo SUM OF 5 RANDOM NUMBERS : $sum
echo AVERAGE OF 5 RANDOM NUMBERS : $((sum / count)) 

#Unit conversion
f2i(){
    echo $(($1 * 12))
}
echo 42feet = $(f2i 42) Inches
area=$(($(f2i 60) * $(f2i 40)))
echo Rectangular Plot of 60f and 40f = $area 

