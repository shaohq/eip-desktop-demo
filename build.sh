#!/bin/bash
# datetime=`date +%Y%m%d-%H%M%S`
# echo $datetime
tag=eipwork/eip-desktop-demo

npm i
npm run build
docker build \
  --label CI_PROJECT_NAME=eip-desktop-demo \
  --label CI_PROJECT_NAMESPACE=eipwork \
  --label CI_COMMIT_SHA=dd601cdfba476dfcb3a192e8538eb6f960370410 \
  --label CI_COMMIT_REF_NAME=master \
  --label CI_COMMIT_TITLE="index sample" \
  --label CI_COMMIT_MESSAGE="create a sample docker image eipwork/eip-desktop-demo for eip-service-index " \
  --label CI_PIPELINE_URL="https://github.com/shaohq/eip-desktop-demo" \
  -t $tag:latest .
docker tag $tag:latest $tag:$1
docker push $tag:latest
docker push $tag:$1