#!/bin/bash  -x

read -p "Enter Id : " id

case $id in
    ''|*[!0-9]*) echo Invalid ID; exit ;;
esac

awk -F ":" 'BEGIN{status="No User Found"}{if($4 == '$id')  {status="User Found";printf "\n%s\n", $1}}END{printf "%s\n", status}' /etc/passwd


