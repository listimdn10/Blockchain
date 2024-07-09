const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');//constructor
const web = new Web3(ganache.provider());//instance 

// //get to know Mocha which is to run test 
// class Car {
//     park(){
//         return 'stopped';
//     }
//     drive(){
//         return 'vroom';
//     }
// }


// describe('Car', ()=> {
//     it('can park', () => {
//         const car = new Car();
//         assert.equal(car.park(), 'stopped');
//     });
// });