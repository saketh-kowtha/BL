#!/bin/bash  -x

read -p "Enter Year : " year

if [ $(($year % 100)) -ne 0 ] && [ $(($year % 4)) -eq 0 ] || [ $(($year % 400)) -eq 0 ] 
then
    echo Leap Year
else
    echo Not a Leap Year
fi
