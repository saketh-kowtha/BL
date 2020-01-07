#!/bin/bash  -x

read -p "Enter Weekname in a numberic format : " n

case $n in
    1) echo Sunday ;;
    2) echo Monday ;;
    3) echo Tuesday ;;
    4) echo Wednsday ;;
    5) echo Thursday ;;
    6) echo Friday ;;
    7) echo Saturday ;;
    *) echo Invalid Weekday;;
esac