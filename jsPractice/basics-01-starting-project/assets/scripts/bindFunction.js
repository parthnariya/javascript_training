// const array = [1,2,3];
     
// function getMaxNumber(arr){
//   //code here  
// //   return Math.max.apply(null,arr)
// return Math.max.call(arr)
// }
 
// console.log(getMaxNumber(array)) // should return 3

// const character = {
//     name: 'Simon',
//     getCharacter() {
//       return this.name;
//     }
//   };
//   const giveMeTheCharacterNOW = character.getCharacter.bind(character);
   
//   //How Would you fix this?
//   console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

// console.log(this)
function findmyname() {
    
    var a = 'a'
    return function printmyname() {
        var b = 'b';
        return function saymyname() {
            var c ='c'
            return 'parth'
        }
    }
}
console.log(findmyname()()())