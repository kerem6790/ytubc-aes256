const CryptoJS = require('crypto-js');

function testAES(text, key) {
    console.log("\nTest:");
    console.log("Orijinal Metin:", text);
    console.log("Anahtar:", key);

    // Şifreleme
    const encrypted = CryptoJS.AES.encrypt(text, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    console.log("Şifreli:", encrypted);

    // Şifre çözme
    const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
    console.log("Çözülmüş:", decryptedText);
    console.log("Başarılı:", text === decryptedText);
}

// Test senaryoları
testAES("Merhaba Dünya!", "test123");
testAES("YTÜ Blockchain", "ytublockchain123");
testAES("Özel karakterler: !@#$%^&*()", "gizli123");
testAES("Unicode karakterler: 你好，世界！", "password123"); 