import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './App.css';

function App() {
  const [ciphertext, setCiphertext] = useState('');
  const [key, setKey] = useState('ytublockchain123');
  const [plaintext, setPlaintext] = useState('');
  const [error, setError] = useState('');

  const handleDecrypt = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(ciphertext, key);
      const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
      if (decryptedText) {
        setPlaintext(decryptedText);
        setError('');
      } else {
        throw new Error('Invalid decryption');
      }
    } catch (err) {
      setPlaintext('');
      setError('Geçersiz şifreli metin veya anahtar');
    }
  };

  return (
    <div className="min-h-screen bg-[#000] text-white font-mono p-8">
      <div className="max-w-2xl mx-auto relative">
        <img 
          src="/ytu-blockchain-logo.png" 
          alt="YTÜ Blockchain Logo" 
          className="absolute top-0 right-0 w-16 h-16"
        />
        <h1 className="text-3xl font-bold mb-2 text-white">YTÜ Blockchain AES256 Çözücü</h1>
        <p className="text-sm mb-8 text-gray-400">YTÜ Blockchain tarafından yapılmıştır</p>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Gizli Mesaj:</label>
            <textarea
              className="w-full h-32 bg-black border border-[#000080] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#000080] text-white"
              value={ciphertext}
              onChange={(e) => setCiphertext(e.target.value)}
              placeholder="Şifreli metni buraya yapıştırın..."
            />
          </div>

          <div>
            <label className="block mb-2">Gizli Anahtar:</label>
            <input
              type="text"
              className="w-full bg-black border border-[#000080] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#000080] text-white"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>

          <button
            onClick={handleDecrypt}
            className="w-full bg-[#000080] text-white font-bold py-2 px-4 rounded hover:bg-[#000060] transition-colors"
          >
            Şifreyi Çöz
          </button>

          {error && (
            <div className="text-red-500 mt-4">
              {error}
            </div>
          )}

          {plaintext && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-center text-white border-b-2 border-[#000080] pb-2">MESAJ</h2>
              <div className="w-full bg-black border-2 border-[#000080] rounded p-6 min-h-[100px] text-white text-lg">
                {plaintext}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App; 