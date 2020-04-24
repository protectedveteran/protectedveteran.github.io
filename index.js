const { exec } = require('child_process');

exec('http-server -o');

exec('sass --watch src/style.scss style.css');

exec('tsc --target ES5 --watch -out script.js src/index.ts');




