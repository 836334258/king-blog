#!/bin/bash

start_date=`date "+%Y-%m-%d %H:%M:%S"`
git pull origin main:main
echo -e "git pull success"
git add .
echo -e "git add success"
git commit -m "$start_date edit"
echo -e "git commit"
git push origin main
echo -e "success publish"

