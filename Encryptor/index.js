console.log('The encryptor js file loaded');

const letters = 'abcdefghijklmnopqrstuvwxyz!?ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
const encrypt_key = 'bcdefghijklmnopqrstuvwxyza?!BCDEFGHIJKLMNOPQRSTUVWXYZA ';

function encrypt(text) {
let result = '';
  
  for (let i = 0; i < text.length; i++) {
    let letter = text[i]; 
    let letterIndex = letters.indexOf(letter);
    
    if (letterIndex < 0) {
      result += letter;
    }
    else {
      result += encrypt_key[letterIndex];
  }
 }
  
  return result;
}


function decrypt(text) {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    let letterIndex = encrypt_key.indexOf(letter);
    
    if (letterIndex < 0) {
      result += letter;
    }// if
    
    else {
      result += letters[letterIndex]; 
    }// else
    
  }// for
  
  return result;
  
}// decrypt
  

 

const encryptForm = document.getElementById('encrypt-form')
encryptForm.addEventListener('submit', function(e) {
  e.preventDefault();
  //get the value of the content
  let messageElement = document.getElementById('encrypt');
  let message = messageElement.value;
  

    let encrypted = encrypt(message);
  
  let encodedMessageElement = document.getElementById('encoded-message');
  encodedMessageElement.innerText = encrypted; 
          }); 

function Decrypt(text) {
let result = '';
  
  for (let i = 0; i < text.length; i++) {
    let letter = text[i]; 
    let letterIndex = letters.indexOf(letter);
    
    if (letterIndex < 0) {
      result += letter;
    }
    else {
      result += letters[letterIndex];
  }
 }
  
  return result;
}
  







const decryptForm = document.getElementById('decrypt-form')
decryptForm.addEventListener('submit', function(e) {
  e.preventDefault();
  //get the value of the content
  let messageElement = document.getElementById('decrypt');
  let message = messageElement.value;
  

    let decrypted = decrypt(message);
  
  let decodedMessageElement = document.getElementById('decrypted-message');
  decodedMessageElement.innerText = decrypted; 
          }); 

function Decrypt(text) {
let result = '';
  
  for (let i = 0; i < text.length; i++) {
    let letter = text[i]; 
    let letterIndex = letters.indexOf(letter);
    
    if (letterIndex < 0) {
      result += letter;
    }
    else {
      result += letters[letterIndex];
  }
 }
  
  return result;

  


 
