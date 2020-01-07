#!/bin/bash  -x

function delta(){
    echo $(( b * b - 4 * a * c ))
}

root1(){
    local det=$("delta")
    echo Root 1 : $(( (-1 * $b + (sqrt $det)) / (2 * $a) ))
}

root2(){
    local det=$("delta")
    echo Root 2 :  $(( (-1 * $b - (sqrt $det)) / (2 * $a) ))
}


read -p "A, B, C : " a b c

root1 $a $b $c
root2 $a $b $c