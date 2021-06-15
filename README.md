# listAll

ListAll is for listing up all Github repositories and Kubernetes workloads.

# Usage

## Step 1. Get a private access token in Github
Visit Setting > Developer settings > Personal access tokens in Github, and click `generate a new token`. 

## Step 2. Get the url for the organization to list all repositories (in case it has more than one page)
Write the following curl command in your terminal: 
```
curl -H "Authorization: token mytoken" 'https://api.github.com/orgs/ORG/repos' -s -I | grep link
```
Here, `mytoken` is the one you created at step 1, and `ORG` is the organization's name. As result, you will see the links for next page and the last page. 
```
https://api.github.com/organizations/NUMBER/repos
```
Take this part and use it at `step 4`. If this part does not show you anything, use `https://api.github.com/orgs/ORG/repos` at `step 4`.

## Step 3. Setting gcloud and kubectl
Download and install GCP SDK, and install kubectl.
```
gcloud init
gcloud components install kubectl
gcloud container clusters get-credentials CLUSTER_NAME --zone=<ZONE>
```
You can find `CLUSTER_NAME` and `ZONE`in the page of Kubernetes clusters.

## Step 4. List github repos and kubernetes workloads
Clone this repository and install the dependencies:
```
git clone https://github.com/yoonjoo-storytel/listAll.git
npm install
```
Run using your private access token from `step 1` and the organization's url from `step 2`.
```
node main.js TOKEN URL
```

You will find the result in four different txt-files:
- matched.txt : list of the matched repositories/deployments.
- onlyInRepos.txt : list of the repositories without an exact match.
- onlyInDeployments.txt : list of the deployments without an exact match.
- similarRepos.txt : the list of deployments with similar repository.