const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');//constructor
const web3 = new Web3(ganache.provider());//instance 
const  { interface, bytecode } = require('../compile.js')
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


let accounts;
let inbox;

//fetching accounts from ganache network 
//account from ganache is unlocked 

beforeEach (async () => {
    //GET A LIST OF ALL ACCOUNT 
    //try async and await to more readable code
    accounts = await web3.eth.getAccounts() //use eth modules of the web3, use the getaccount of eth 
       
    //Use one of those account

    //the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);

    })
})