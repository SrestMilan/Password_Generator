"use strict";
const passwordInput=document.getElementById("password"); // getting html element by their id using document object
const passwordLength=12;   // assigning password length

const upperCaseLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // storing uppercase letter
const lowerCaseLetter="abcdefghijklmnopqrstuvwxyz" // storing lowercase letter
const number="0123456789"; // storing number
const symbol="!@#$%^&*?)(|:+";  // storing several symbols


const allCharacter=`${upperCaseLetter}${lowerCaseLetter}${number}${symbol}`

// creating arrow function to add character in password
let generatePassword=()=>{
    let password="";
    password +=upperCaseLetter[Math.floor(Math.random()*upperCaseLetter.length)];// takes character according to index number of uppercase letter
    password +=lowerCaseLetter[Math.floor(Math.random()*lowerCaseLetter.length)];// takes character according to index number of lowercase letter
    password +=number[Math.floor(Math.random()*number.length)]; // takes character according to index number of number
    password +=symbol[Math.floor(Math.random()*symbol.length)];// takes character according to index number of symbol


    // condition run unless 12 character is fetch
    while(passwordLength>password.length){
        password +=allCharacter[Math.floor(Math.random()*allCharacter.length)];
    }
    passwordInput.value=password; // value fetch in password inputfield
}


