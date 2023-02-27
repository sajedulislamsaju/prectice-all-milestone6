// console.log('this is the console log ')

const user = {id:1 , name: 'saju', job : 'want to a programer.'}
const user1 = {id:2 , name: 'masud', job : 'a pro lavel programer'}

const stringyfhy = JSON.stringify(user1);
console.log(stringyfhy)
console.log(user)

const parts = JSON.parse (stringyfhy)

console.log (parts)