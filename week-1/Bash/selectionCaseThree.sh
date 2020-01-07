#!/bin/bash  -x

read -p "Enter Number : " n

case $n in
    [1-9]) echo Units ;;
    [1-9][0-9]) echo Tens ;;
    [1-9][0-9][0-9]) echo Hundreds ;;
    [1-9][0-9][0-9][0-9]) echo Thousands ;;
    [1-9][0-9][0-9][0-9][0-9]) echo TenThousands ;;
    [1-9][0-9][0-9][0-9][0-9][0-9]) echo Lakhs ;;
    *) echo Invalid;;
esac