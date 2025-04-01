import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './App.css';

function App() {
  const [ciphertext, setCiphertext] = useState('');
  const [key, setKey] = useState('ytublockchain123'); // tool ile aynı key
  const IV = '0000000000000000';   // tool ile aynı IV - sabit
  const [plaintext, setPlaintext] = useState('');
  const [error, setError] = useState('');

  const handleDecrypt = () => {
    if (!ciphertext.trim() || !key.trim()) {
      setError('Lütfen tüm alanları doldurun');
      return;
    }

    try {
      // WordArray dönüştür
      const keyBytes = CryptoJS.enc.Utf8.parse(key);
      const ivBytes = CryptoJS.enc.Utf8.parse(IV);

      // AES CBC çözme
      const decrypted = CryptoJS.AES.decrypt(ciphertext.trim(), keyBytes, {
        iv: ivBytes,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

      const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

      if (!decryptedText) {
        throw new Error('Geçersiz şifreli metin veya anahtar');
      }

      setPlaintext(decryptedText);
      setError('');
    } catch (err) {
      setPlaintext('');
      setError('Şifre çözme hatası: ' + err.message);
      console.error('Hata:', err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold mb-4">YTÜ Blockchain AES256 Çözücü</h1>
        <p className="mb-8 text-gray-400">Made by ytublockchain</p>

        <div className="space-y-4">

          <div>
            <label>Şifreli Mesaj (Ciphertext - Base64)</label>
            <textarea
              className="w-full bg-black border rounded p-2 mt-1"
              value={ciphertext}
              onChange={(e) => setCiphertext(e.target.value)}
              placeholder="Ciphertext buraya..."
              rows={4}
            />
          </div>

          <div>
            <label>Anahtar (Key)</label>
            <input
              className="w-full bg-black border rounded p-2 mt-1"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="ytublockchain123"
            />
          </div>

          <button
            className="w-full bg-blue-700 py-2 rounded hover:bg-blue-600 transition"
            onClick={handleDecrypt}
          >
            Şifreyi Çöz
          </button>

          {error && (
            <div className="text-red-500 mt-4">{error}</div>
          )}

          {plaintext && (
            <div className="mt-4 bg-gray-800 p-4 rounded">
              <h2 className="text-xl font-bold mb-2">Çözülmüş Mesaj</h2>
              <div>{plaintext}</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="fixed bottom-2 left-2 text-gray-500 text-xs font-mono opacity-80">
          AES-256 | CBC | PKCS7Padding | IV: 0000000000000000
        </div>

      </div>
    </div>
  );
}

export default App;