const os = require('os');

// Info about the current user
console.log(os.userInfo());

// Get the system uptime in seconds
console.log(`The system has been running for ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);

