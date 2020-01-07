#!/bin/bash  -x

function gambling(){
    amount=100.0

    while [ $(echo "$amount>95.0"|bc) -gt 0 ] && [ $(echo "$amount<110.0"|bc) -gt 0 ]
    do
        rand=$((RANDOM % 2))
        if [ $rand -eq 1 ]
        then
            amount=$(bc <<< "scale=1; $amount + 1.0")
        else
            amount=$(bc <<< "scale=1; $amount - 1.0")
        fi
    done
}

n=1


looseDays=0
wonDays=0
totalAmount=0.0

while [ $n -lt 21 ]
do
    gambling
    if [ $(echo "$amount==50.0"|bc) -gt 0 ]
    then
        echo "Day $n => $amount Unlucky Day!!!!"
        ((looseDays++))
    else
        echo "Day $n => $amount Lucky Day!!!!"
        ((wonDays++))
    fi
    totalAmount=$(bc <<< "scale=1; $totalAmount + $amount ")
    ((n++))
done


echo Total Amount Earned : $totalAmount
echo Total Amount Spended : $((20 * 100))

echo Lucky Days : $wonDays
echo Unlucky Days : $looseDays

if [ $(echo "$totalAmount>2000.0"|bc) -gt 0 ]
then
    echo Status : $(bc <<< "scale=1; $totalAmount - 2000.0 ") PROFIT
    echo "You got some profit this month you can go with next month"
else
    echo Status : $(bc <<< "scale=1; $totalAmount - 2000.0 ") LOSS
    echo "You got some loss this month better to drop for next month"
fi
