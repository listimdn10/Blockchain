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


//fetching accounts from ganache network 
//account from ganache is unlocked 

beforeEach ( () => {
    //GET A LIST OF ALL ACCOUNT 
    web3.eth.getAccounts() //use eth modules of the web3, use the getaccount of eth 
        .then(fetchedAccounts=> {
            console.log(fetchedAccounts);
        })
    //Use one ò those account
    //the contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        
    })
})