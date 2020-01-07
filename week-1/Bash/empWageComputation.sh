#!/bin/bash  -x

echo Welcome to Employee Wage Computation

function dailyWage(){
    local wagePerHour=20
    local workingHours=8
    echo $((wagePerHour * workingHours))
}

function getTotalWorkHours(){
    local workingHours=8
    echo $((empWorkingDays * workingHours))
}

partTimeHour=8

empWorkingDays=0



workingDayPerMonth=20
totalWage=0

declare -A dailyWages

days=30

while [ $days -ne 0 ]
do
    case $((RANDOM%2)) in 
        0)  
            ;;#Absent
        1)  ((empWorkingDays++))
            totalWage=$((totalWage + $(dailyWage)))
            dailyWages[$empWorkingDays]=$(dailyWage) ;;#Present
    esac
    
    if [ $empWorkingDays -ge 20 ] || [ $((empWorkingDays*workingHours)) -ge 100 ]
    then
        break
    fi
    ((days--))

done

for i in "${!dailyWages[@]}"
do
    echo "Day $i : ${dailyWages[$i]}"
done

echo Total Wage : $totalWage


