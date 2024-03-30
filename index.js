// // Assignment 21 to 25 ;

// // Question 1 and 6

// let firstName = prompt(" Enter Your First Name" );
// let lastName = prompt(" Enter Your last Name ");

// // let fullName = firstName + " " + lastName;

// let fullName ;

// fullName = firstName.concat( " " , lastName);



// document.write("<h2> Welcome To My Page ", fullName , " </h2> ");


// // Question 2; 

// let userInput = prompt("Enter Your Favourite Mobile");

// let flag = false;

// for (let i = 0 ; i <= userInput.length ; i++){
//     if(userInput.slice(i, i + 2) === "  " ){
//         console.log("No Double Space");
//         flag = true
//         break;
//     }
// }

// if (!flag){

// console.log(userInput.length);

// document.write("<h2> Your Favourite Mobile Is ", userInput  ," <br> The Length Of String Is : " , userInput.length , " </h2> ");
 
// }

////Question 3 ;

// let str = "Pakistani";

// document.write("<h2> String is : ", str , "  <br> the Index of 'n' is : " , str.indexOf("n") , " </h2> ");

// // Question 4

// let word = "hello world";

// document.write("<h2> String is : , word , " , " <br> the last Index of 'l' is : " , word.lastIndexOf("l") , " </h2> ");

// // Question 5 ;

// document.write("<h2> String is : ", str , "  <br> the character at index 3 is : " , str.charAt(3) , " </h2> ");

// //Question 6 ;

// let city = "hyderabad";

// let replaceCity = city.replace( "hyder" , "islam")

// document.write("<h2> City is : ", city , "  <br> After Replacement City is : " , replaceCity , " </h2> ");

// //Question 7 ;

// let message = "Ali and Sami are best friends. They play cricket and football together.";

// let replaceWord = message.replaceAll("and" , "&");

// document.write("<h2> Message is : ", message , "  <br> After Replacement All and is : " , replaceWord , " </h2> ");

//// Question 8 ;

// let stringNum = "229";

// let numberStr = Number(stringNum)

// document.write("<h2> Value : ", stringNum , "  <br> type of  : " , typeof stringNum ," <br> Value : ", numberStr , "  <br> type of  : " , typeof numberStr , " </h2> ");

// // Question 9 ; 

// let userInputToConvertUpperCase = prompt("Enter any Word i will convert word to UPPER CASE ");

// document.write("<h2> User Input is : ", userInputToConvertUpperCase , "  <br> After Convert to UPPERCASE : " , userInputToConvertUpperCase.toUpperCase() , " </h2> ");

// Question 10 ; 
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }

// let userInputToConvertTitleCase = prompt("Enter any Word i will convert word to TITLE CASE ");

// let titleCase = userInputToConvertTitleCase

// document.write("<h2> User Input is : ", titleCase , "  <br> After Convert to TITLECASE : " ,  toTitleCase(titleCase) , " </h2> ");


// Question 12;

// let num = 35.36 ;

// document.write("<h2> Number is : ", num , "  <br> After remove The Dot  : " , num.toString().replace(".",""), " </h2> ");

//// question 13;

// let userInputName = prompt ("Enter Any Thing");

let specialCharacters = ["@" , "!" , "," , "."];


while (true){
    let userInputName = prompt ("Enter Any Thing");
    let specialChar = false
    for(let i = 0 ; i < userInputName.length ; i++){
    if (specialCharacters.includes(userInputName[i])){
        // alert("Invalid input You Entered A Special Charactor @ ! . ,");
       specialChar = true;
       break;
     }  
    } if (specialChar === true){
        alert("Invalid input You Entered A Special Charactor @ ! . ,");
    }
    else{
        alert("Good Your Input Has Not contain Any Special Charactor");
        break;
    }
}


// // Question 14 ;

// let arrayBak = ["cake", "apple pie", "cookie", "chips", "patties" ,"cake rusk" , "cold drink"];

// flags = false

// let userOrder = prompt("Enter An Item For Order");

// for ( let i = 0 ; i <= arrayBak.length ; i++){

//     if(userOrder.toLowerCase() === arrayBak[i] || userOrder.toUpperCase() === arrayBak[i]  ){
//         alert(userOrder + " available in our bakery at index : " + i);
//         flags = true
//         break;
//     }
// }

// if (!flags){
//     alert( "we are sorry"  + userOrder +" not available in our bakery ");
// } 

// // QUestion 15; 

// let digit = false;

// let letter = false

// while (true) {
// let userPassword =prompt("Enter Your Password");

//     if (userPassword.charAt(0) >= 0 || userPassword.charAt(0) <= 9){
//     alert("password should not contain number at start");
//     // break;
//     }else if (userPassword.length < 6){
//         alert("Your Password Contain Atleast 6 Charactors");
//         // break;
     
//     }else{ for(let i = 0 ; i < userPassword.length ; i++)
//     { if (userPassword[i] >= "a" && userPassword[i] <= "z" || userPassword[i] >= "A" && userPassword[i] <= "Z"){
//         digit = true;
//             break;}
//     }
//     for(let i = 0 ; i < userPassword.length ; i++){
//     if (userPassword[i] >= '0' && userPassword[i] <= '9'){
//         letter = true;
//          break;
//     }
//     }if (digit && letter){
//         alert("correct");
//         break;
//     }else{
//         alert("password must contain letter or digit");
       
//     }
// }
// }


// // Question 16 ;

// let university = "University of Karachi";

// let splitUni = university.split();

// document.write("<h2>" , splitUni , "</h2>");

// // Question 17 ;

// let input = "pakistan";

//  str = input[input.length - 1]; 

// // str = input.charAt(input.length - 1) // both work same

// console.log(str);

// // Question 18 

// let strin = "the quick brown fox jumps over the lazy dog";

// let sameValue = "the"
// words = strin.split(" ")
// count = 0

// for (let i = 0 ; i < strin.length ; i++){
//     if (words[i] === sameValue){
//         count++
//     }
// }


// document.write("<h2> The Occurance Of Word 'The' In The Sentence is : " , count )
