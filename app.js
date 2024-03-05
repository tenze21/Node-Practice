//using modules
// const names=require('./name');
const sayHi = require('./utils');
// const data=require('./alternative-export');
// console.log(names);
// console.log(data);
sayHi('Tshering');
// sayHi(names.person1);
// sayHi(names.person2);



//mind-grenade
require('./mind-grenade');//this immediately runs the code in mind-grenade.js. can be used to run code from a different file.