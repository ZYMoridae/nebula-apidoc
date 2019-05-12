#!/usr/bin/env bash
PEM_PATH='~/Documents/buffalo.pem'
DIST_PATH='dist.zip'

rm -rf dist

yarn build

[ -f dist.zip ] && rm ./dist.zip

cp index.html ./dist/

zip -r dist.zip dist

ssh -i "${PEM_PATH}" ec2-user@ec2-13-54-77-173.ap-southeast-2.compute.amazonaws.com '[ -f ~/deployment/api_doc/dist.zip ] && rm ~/deployment/api_doc/dist.zip'
scp -i "${PEM_PATH}" "${DIST_PATH}" ec2-user@ec2-13-54-77-173.ap-southeast-2.compute.amazonaws.com:~/deployment/api_doc/

# ssh -i "${PEM_PATH}" ec2-user@ec2-13-54-77-173.ap-southeast-2.compute.amazonaws.com 'cd ~/deployment/api_doc/ | yes | unzip dist'