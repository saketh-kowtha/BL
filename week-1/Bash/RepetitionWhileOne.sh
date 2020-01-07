#!/bin/bash  -x

pow=2
while [ $pow -ne 256 ] && [ $pow -lt $1 ]
do
    echo $pow
    pow=$((pow * pow))
done