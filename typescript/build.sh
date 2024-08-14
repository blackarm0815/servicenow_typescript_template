javascript_folder="../javascript"
javascript_file="code.js"
typescript_file="code.ts"
echo "eslint code.ts"
if npx eslint $typescript_file
then
  echo "done"
else
  exit
fi
echo
#
echo "transpiling code.ts"
if npx tsc $typescript_file
then
  echo "done"
else
  exit
fi
echo

# remove the code at the end of the script, leaving only what is needed for the script include
echo "making code.js"
sed '/end of script include/q' $javascript_file | grep -v 'end of script include' > $javascript_folder/$javascript_file
cd $javascript_folder
./build.sh
