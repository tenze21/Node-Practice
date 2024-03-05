// built in node modules
//OS module
const { log } = require('console');
const os=require('os');

//Info about current user
const user= os.userInfo();
console.log(user);

//method returns the sytem uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

//using the methods in os module as a object
const currentOs={
    name: os.type(),
    release: os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOs);