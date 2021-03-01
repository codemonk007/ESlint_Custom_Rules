# #!/bin/bash
# clear
# fileList=$(git diff --diff-filter=d --cached --name-only | grep -E '\.(js|vue)$')
# if [ ${#fileList} -lt 1 ]; then
#     echo -e "You have no staged .js or .vue files to test\n"
#     exit
# fi
# npm run eslint ${fileList[*]} "$@"
# if [ $? -ne 0 ]; then
#     echo -e "\nPlease fix the above linting issues before committing.\n"
#     exit 1
# fi
###
#!/bin/bash

for file in $(git diff --cached --name-only | grep -E '\.(js|jsx)$')
do
echo $file
  git show ":$file" | node_modules/.bin/eslint --stdin --stdin-filename "$file" # we only want to lint the staged changes, not any un-staged changes
  if [ $? -ne 0 ]; then
    echo "ESLint failed on staged file '$file'. Please check your code and try again. You can run ESLint manually via npm run eslint."
    exit 1 # exit with failure status
  fi
done

