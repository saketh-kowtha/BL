#!/bin/bash  -x

n=0

feilds=("H" "T")

declare -A singlet

declare -A doublet

declare -A triplet


function generateSequence(){
    for ((i=0;i<2;i++))
    do
        singlet[${feilds[$i]}]=0
        for ((j=0; j< 2; j++))
        do
            doublet["${feilds[$i]}${feilds[$j]}"]=0
            for ((k=0;k<2;k++))
            do
                triplet["${feilds[$i]}${feilds[$j]}${feilds[$k]}"]=0 
            done
        done
    done
}

generateSequence 


read -p "How many times to flip coin : " iterCount

while [ $n -lt $iterCount ]
do
    single="${feilds[$((RANDOM % 2))]}"
    ((singlet[$single]++))
    double="${feilds[$((RANDOM % 2))]}${feilds[$((RANDOM % 2))]}"
    ((doublet[$double]++))
    triple="${feilds[$((RANDOM % 2))]}${feilds[$((RANDOM % 2))]}${feilds[$((RANDOM % 2))]}"
    ((triplet[$triple]++))
    ((n++))
done

echo -e "\n\nSinglet"
for i in ${!singlet[@]}
do
    echo "Percentage of $i : $(bc <<< "scale=2; (${singlet[$i]} * 100) / $iterCount ")%"
done | sort -rn -k5

echo -e "\n\nDoublets"
for i in ${!doublet[@]}
do
    echo "Percentage of $i : $(bc <<< "scale=2;  (${doublet[$i]} * 100) / $iterCount ")%"
done | sort -rn -k5

echo -e "\n\nTriplets"
for i in ${!triplet[@]}
do
    echo "Percentage of $i : $(bc <<< "scale=2;  (${triplet[$i]} * 100) / $iterCount ")%"
done | sort -rn -k5

