#!/bin/bash  -x

x=$1
y=$2

echo X : $1 and Y : $2
d=$(echo "scale=2;sqrt($x*$x + $y*$y)" | bc)

echo Distance : $d
