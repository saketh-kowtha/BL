#!/bin/bash  -x

month=$1
day=$2
year=$3

if((month < 1 || month > 12))
then
    echo Error: Month range between 1 - 12
    exit 0
fi

if((day < 1 || day > 31))
then
    echo Error: Day should be range between 1 - 31
    exit 0
fi

y0=$(( year - (14 - month) / 12 ))

x=$((y0 + y0/4 - y0/100 + y0/400))

m0=$(( month + 12 * ((14 - month) / 12) - 2 ))

d0=$(( (day + x + 31 * m0 / 12) % 7 ))

echo $d0