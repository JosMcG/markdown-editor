# Markdown Editor

## Details

## Building the Project

 Something

## Setting Git Globals

```shell

git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
git config --global init.defaultBranch main
```

## Testing the Project

```shell
npx vite dev
```

```shell
## Adding project to git

# Create a repository in git first

# Creates a new local git repository -- runs automatically in VScode if click the git icon
git init .

# List remote repositories
git remote -v

# Use the main branch
git branch -m main

# Change the branch name master to main  -- don't need ifglobal is set
git branch -m  master main

# Adds all files in the current directory that are not in gitignore to local repository
git add .

# Commits changes to local repository
# Goes to VI - need to use :wq! to get out
git commit -a

# Adds a definition of a remote repository by name (origin) to local repository
git remote add origin git@github.com:JosMcG/markdown-editor.git

# Pushes local commited changes to remote repository named(origin)
git push -u origin main
```
