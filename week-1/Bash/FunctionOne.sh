#!/bin/bash  -x

degF(){
    echo $((($1 * 9/5) + 32))
}

degC(){
    echo $((($1 -32) * 5/9))
}

echo 1. F to C
echo 2. C to F

read -p "Enter your choice : " n

if [[ $n -eq 1 ]]
then
    echo F should be between [0-100]
    read -p "Enter C : " c
    case $c in
        [0-9] | [0-9][0-9] | 100) degF $c ;;
        *) echo Inavalid ;;
    esac
else
    echo C should be between [32-212]
    read -p "Enter F : " f
    case $f in
        [3][2-9] | [4-9][0-9] | [1-2][0-1][0-2]) degC $f ;;
        *) echo Inavalid
    esac
fi