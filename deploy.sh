#!/bin/bash

: "${GITHUB_USER?Need to set GITHUB_USER}"
: "${GITHUB_REPO?Need to set GITHUB_REPO}"
: "${GITHUB_BRANCH?Need to set GITHUB_BRANCH}"
: "${GITHUB_TOKEN?Need to set GITHUB_TOKEN}"
: "${AWS_REGION?Need to set AWS_REGION}"

aws cloudformation deploy ... --region $AWS_REGION --parameter-overrides etc
