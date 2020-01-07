#!/bin/bash  -x

day=$1
month=$2

if [ $day -ge 20 ] && [ $month -ge 3 ] && [ $day -le 20 ] && [ $month -le 6 ]
then
    echo True
else
    echo False
fi