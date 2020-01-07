#!/bin/bash  -x

read -p "Enter Number : " num

isPallindrome(){
    n=$1
    tmp=$n
    rev=0
    while [ $n -gt 0 ]
    do
        rev=$(( rev * 10 +  n % 10))
        n=$((n/10))
    done
    if [[ $rev -eq $tmp ]]
    then
        pallindrome=1
    else
        pallindrome=0
    fi

}


isPrime(){
    local num=$1
    prime=1
    for((i=2; i<=$(bc <<< "scale=0; sqrt($num)"); i++))
    do
    if [ $(($num%i)) -eq 0 ]
    then
       prime=0
    fi
    done
}

isPrime $num
if [ $prime -eq 1 ]
then 
    isPallindrome $num
    echo Prime number
    if [ $pallindrome -eq 1 ]
    then
        echo pallindrome
    fi
fi
