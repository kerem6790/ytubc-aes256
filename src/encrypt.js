const CryptoJS = require('crypto-js');

const text = "Ekonomik Boykot! #2Nisan'da alım satım yapmıyoruz!";
const key = "ytublockchain123";

const encrypted = CryptoJS.AES.encrypt(text, key).toString();
console.log("Şifreli metin:", encrypted); 