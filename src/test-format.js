const CryptoJS = require('crypto-js');

function encryptAES(text, key) {
    // Key'i 128-bit'e normalize et
    const keySize = 128;
    const normalizedKey = CryptoJS.enc.Utf8.parse(key);
    normalizedKey.sigBytes = keySize / 8;

    // IV oluştur (CBC modu için gerekli)
    const iv = CryptoJS.lib.WordArray.random(16);

    // Şifreleme
    const encrypted = CryptoJS.AES.encrypt(text, normalizedKey, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs5
    }).toString();

    console.log("\nTest:");
    console.log("Metin:", text);
    console.log("Şifreli (Base64):", encrypted);
}

// Test
encryptAES("ytublockchain123", "ytublockchain123"); 