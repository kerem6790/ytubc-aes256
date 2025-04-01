const CryptoJS = require('crypto-js');

// Test 1: Basit metin
const text1 = "Merhaba Dünya";
const key1 = "test123";
const encrypted1 = CryptoJS.AES.encrypt(text1, key1).toString();
console.log("\nTest 1:");
console.log("Metin:", text1);
console.log("Anahtar:", key1);
console.log("Şifreli:", encrypted1);

// Test 2: Farklı bir anahtar
const text2 = "Gizli Mesaj";
const key2 = "ytublockchain123";
const encrypted2 = CryptoJS.AES.encrypt(text2, key2).toString();
console.log("\nTest 2:");
console.log("Metin:", text2);
console.log("Anahtar:", key2);
console.log("Şifreli:", encrypted2); 