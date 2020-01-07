#!/bin/bash  -x

echo 1. Feet to Inch
echo 2. Inch to Feet
echo 3. Feet to Meter
echo 4. Meter to Feet

read -p "Enter your Choice : " operation

case $operation in
    1) read -p "Enter Feet Value : " n; echo "scale=4;$n * 12" | bc ;;
    2) read -p  "Enter Inch Value : " n; echo "scale=4;$n / 12" | bc ;;
    3) read -p  "Enter Feet Value : " n; echo "scale=4;$n / 3.281" | bc   ;;
    4) read -p  "Enter Meter Value : " n; echo "scale=4;$n * 3.281" | bc  ;;
    *) echo "Invalid Choice"; exit 0 ;;
esac

