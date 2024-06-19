#!/bin/bash
echo "settingup web application"
sudo apt update -y
sudo apt install nginx -y
sudo rm -r /var/www/html/
sudo git clone https://github.com/mannurajesh/kalki2898AD.git /var/www/html/
echo "application deployemnt completed"
