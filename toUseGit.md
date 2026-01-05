git init -- initialize a git in your project
git add . -- staging the files with changes
git commit -m "your notes message" -- commit changes from staging

## connect to remote repository Github

open Github acct and create a new repository
it will give you instructions
git remote add origin <github repo url> -- to connect local repository to remote github repo
git branch -M main -- this changes your local branch name to main
git push -u origin main -- this will push changes of local repository to remote github repository

## add new changes from local repo to remote github repo

git add . -- staging all the changes in project fodler
git commit -m "your notes" -- this commit the changes from the staging in local repository
git push origin main -- this push the changes in local repository to remote github repository
