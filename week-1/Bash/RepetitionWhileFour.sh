#!/bin/bash  -x

amount=100

winCount=0
participationCount=0

while [ $amount -le 200 ]
do
    rand=$((RANDOM % 2))
    if [ $rand -eq 1 ]
    then
        ((amount--))
    else
        ((amount++))
        ((winCount++))
    fi
    ((participationCount++))
done

echo "No of times Won = -> "$winCount
echo "No of times Participate = -> "$participationCount