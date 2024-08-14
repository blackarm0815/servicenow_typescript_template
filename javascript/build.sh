javascript_file="code.js"
final_file="../code.js"
# replace double quotes with single quotes
sed -i "s/\"/'/g" code.js
# fix the indentation
npx eslint $javascript_file --no-eslintrc --fix --rule 'indent: [2, 2]'
# fix the braces
npx eslint $javascript_file --no-eslintrc --fix --rule 'brace-style: ["error", "1tbs", { "allowSingleLine": true }]'
# remove typescript ignores
grep -v @ts-ignore < $javascript_file > $final_file
