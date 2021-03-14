const figlet = require('figlet');
/* eslint-disable no-console */
figlet('LUMIN     :)', function (err, data) {
    if (err) {
        console.log('IGNORE ME, Figlet error => ', err);
    }
    console.log(data);
    console.log('Hi Dev! Did you remember to run `yarn run lint:fix` before committing?');
});
/* eslint-enable no-console */