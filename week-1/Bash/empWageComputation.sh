echo Welcome to Employee Wage Computation

employeeAttendence=$((RANDOM%2))

wagePerHour=20
workingHours=8

partTimeHour=8

case $employeeAttendence in 
    0) ;;#Absent
    1) ;;#Present
esac

workingDayPerMonth=20