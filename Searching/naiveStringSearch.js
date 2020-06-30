function naiveStringSearch(str1, str2) {
  let matchesCount = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] !== str2[j]) {
        break;
      }
      if (j + 1 === str1) {
        matchesCount++;
      }
    }
  }
}
