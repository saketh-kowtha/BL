read -p "Enter A B C : " a b c

declare -A dict

dict["a + b * c"]=$((a + b * c))

dict["a * b + c"]=$((a * b + c))

dict["c + a / b"]=$((c + a / b))

dict["a % b + c"]=$((a % b + c))


count=0

for i in "${!dict[@]}"
do
    arr[$count]=${dict[$i]}
    echo "$i => ${dict[$i]}"
    ((count++))
done

sorted=($(printf '%s\n' "${arr[@]}"|sort))

rsorted=($(printf '%s\n' "${arr[@]}"|sort -r))


echo Sorted : ${sorted[@]}

echo Reverse Sorted : ${rsorted[@]}


