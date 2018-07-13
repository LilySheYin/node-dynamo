#!/bin/bash

# Github details
echo "Set repository details:"
echo -n "GitHub User: "
read GITHUB_USER
if [[ -z ${GITHUB_USER} ]]
then
  echo "Please enter the GitHub User"
  exit 1
fi
echo -n "GitHub Repo: "
read GITHUB_REPO
if [[ -z ${GITHUB_REPO} ]]
then
  echo "Please enter the GitHub Repo"
  exit 1
fi
echo -n "GitHub Branch: "
read GITHUB_BRANCH
if [[ -z ${GITHUB_BRANCH} ]]
then
  echo "Please enter the GitHub Branch"
  exit 1
fi
echo -n "GitHub Personal Access Token: "
read GITHUB_TOKEN
if [[ -z ${GITHUB_TOKEN} ]]
then
  echo "Please enter the GitHub Personal Access Token"
  exit 1
fi

# Deployment details
echo "Set deployment details:"
echo -n "AWS Region: "
read AWS_REGION
if [[ -z ${AWS_REGION} ]]
then
  echo "Please enter the AWS Region"
  exit 1
fi

export GITHUB_USER=${GITHUB_USER}
export GITHUB_REPO=${GITHUB_REPO}
export GITHUB_BRANCH=${GITHUB_BRANCH}
export GITHUB_TOKEN=${GITHUB_TOKEN}
export AWS_REGION=${AWS_REGION}
