function decrypt(word) {
  let decryptedString = '';
  let decryptedCharCode = 0;
  let prevCharCode = 1;
  let currCharCode = 0;
  for (let i = 0; i < word.length; i++) {
    currCharCode = word.charCodeAt(i);
    decryptedCharCode = currCharCode - prevCharCode;
    while (decryptedCharCode < 97 || decryptedCharCode > 122) {
      if (decryptedCharCode < 97) decryptedCharCode += 26;
      else decryptedCharCode -= 26;
    }
    decryptedString += String.fromCharCode(decryptedCharCode);
    prevCharCode = decryptedCharCode + prevCharCode;
  }
  return decryptedString;
}

  // Decrypted char is z:
  // 97-122
  //     z + 1 = 123
  //     123-26 = 97


/*

Decrypted message:	c	r	i	m	e
Step 1:	99	114	105	109	101
Step 2:	100	214	319	428	529
Step 3:	100	110	111	116	113
Encrypted message:	d	n	o	t	q

10
36
62
88
114 - original char code
114 + 100 = 214

111 - 214 = -103 + 26....x times = 105
105 + 214 = 319

// Subtract encrypted first char code from encrypted second char code
// Add 26 to n char code until it is within ASCII range
// Store this decrypted n char code
// Subtract decrypted n char code from encrypted n + 1 char code
// Return decryptedString
// O(n) time | O(n) space
*/1
