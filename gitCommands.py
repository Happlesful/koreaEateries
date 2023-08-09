# Git Hub Commands

## Initialising a new repo in git hub/ Push request ##

### Creare a new repo in git hub
### In terminal of the project folder
# git init

### Create connection from local to git hub
# git remote add origin <ssh of the repo>

### To check all connections to the repo
# git remote -v
### Check the status of any untracked file
# git status

### Adding the untracked files to git
# git add <filename.js>

### To commit changes into git (locally), with the message of why you are committing the changes to git
# git commit -m <"message"> -m <"message for desc. box>

### To commit the changes live into the repo where the project is hosted
# git push -u origin master (-u is only used for the first time, afterwards just use git push)



## Making changes to the repo/ Push request ##

### if using clone with ssh
# git clone <git@github.com:Happlesful/MatJib.git>

### To notify git to track the changes of your file
# git add <filename.js>

### To check all the files that git is currenty tracking
# git status

### To commit changes into git (locally), with the message of why you are committing the changes to git
# git commit -m <"message"> -m <"message for desc. box>

### To add tracked file to git and commit at the same time
# git commit -am <"message"> -m <"message for desc. box>

### To commit the changes live into the repo where the project is hosted
# git push origin master



## Pulling from git hub ##
# git pull origin master
# git pull (if upstream is already set up)



## Branching in git ##
# Used for testing new features without affecting the main branch (building a side branch from the main branch)

### To check all the branches in the repo
# git branch

### To create a new branch
# git branch <branch-name>
# git branch -M <new-branch-name>

### To create and switch to a different branch
# git checkout -b <branch-name>

### To switch to a different branch
# git checkout <branch-name>

### To see the changes made in the branch
# git diff <branch-name>

### To merge the branch to the main branch
# git merge <branch-name>

### To delete a branch
# git branch -d <branch-name>



## Undoing in git ##
# git reset
# git reset <hash> (hash is the commit hash obtained from the git log)


### To undo the last commit
# git reset HEAD~1
# (Head is the pointer to the last commit, ~1 is the number of commits to undo)

### To view all previous commits
# git log



## Generating SSH keys ##
# ssh-keygen -t rsa -b 4096 -C <email> (source from youtube)
# ssh-keygen -t ed25519 -C "your_email@example.com" (source from github)

# SHA256:wLJZP5v082hTkh7O0VzJfD5v48AEsJ177Wh+OIgfdEM Swislar1108@gmail.com

# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAID5or0pNOq3zdSN9aqvIWBmEvUtLEUzHBsFNNcmYtGja Swislar1108@gmail.com
