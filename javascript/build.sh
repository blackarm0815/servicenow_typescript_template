javascript_file="code.js"
final_file="../code.js"
# replace double quotes with single quotes
sed -i "s/\"/'/g" code.js
# fix the indentation
npx eslint $javascript_file --no-eslintrc --fix --rule 'indent: [2, 2]'
# fix the braces
npx eslint $javascript_file --no-eslintrc --fix --rule 'brace-style: ["error", "1tbs", { "allowSingleLine": true }]'
if npx eslint $javascript_file
then
  sed  's/\/\/ eslint-disable-line//g' $javascript_file | grep -v eslint-disable-next-line > $final_file
fi