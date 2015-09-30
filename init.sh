rm -rf .git
npm init
wget https://ankin.info/cse220/gulpfile.js
mkdir src
touch src/main.asmh
touch src/main.asm
mkdir src/data
mkdir src/functions
mkdir src/macros
mkdir src/parts
npm install gulp --save-dev
npm install gulp-concat --save-dev
npm install gulp-rename --save-dev
npm install gulp-shell --save-dev
gulp watch
