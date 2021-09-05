const {readFile, writeFile} = require('fs');
const { connect } = require('tls');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result.txt',
        `The result is: ${first}, LOL ${second}, BUT ASYNCRONOUSLY`,
        (err, result => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(result);
        }));
    }); 
});

