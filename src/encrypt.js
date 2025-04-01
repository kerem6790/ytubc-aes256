const CryptoJS = require('crypto-js');

// Plaintext ve key
const text = "Ekonomik Boykot! #2Nisan'da alım satım yapmıyoruz!";
const key = CryptoJS.enc.Utf8.parse("ytublockchain123"); // 16-byte key
const iv = CryptoJS.enc.Utf8.parse("0000000000000000");  // 16-byte IV

// Encrypt
const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
}).toString();

console.log("Şifreli metin:", encrypted);