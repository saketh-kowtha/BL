#!/bin/bash  -x

sudo useradd -m guest_user -p admin123
sudo mkdir /home/guest/Desktop
sudo chown -R admin1:admin1 /home/guest/Desktop

echo HELLO  > /home/guest/Desktop/file.txt 
