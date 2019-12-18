read -p "Enter Number : " n

case $n in
    [1-9]) echo Units ;;
    [0-9][0-9]) echo Tens ;;
    [0-9][0-9][0-9]) echo Hundreds ;;
    [0-9][0-9][0-9][0-9]) echo Thousands ;;
    [0-9][0-9][0-9][0-9][0-9]) echo TenThousands ;;
    [0-9][0-9][0-9][0-9][0-9][0-9]) echo Lakhs ;;
esac