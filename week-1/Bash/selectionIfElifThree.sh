#!/bin/bash  -x

read -p "Enter Number : " n

if [ $n -lt 10 ]
then
    echo Units
elif [ $n -lt 100 ]
then
        echo Tens
elif [ $n -lt 1000 ]
then
        echo Hundreds
elif [ $n -lt 10000 ]
then
    echo Thousands
fi