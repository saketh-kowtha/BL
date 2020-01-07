#!/bin/bash  -x

rand=$((RANDOM % 2))


case $rand in
    0) echo Heads ;;
    1) echo Tails ;;
esac