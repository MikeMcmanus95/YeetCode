function moveElementToEnd(array, toMove) {
    let left = 0, right = array.length - 1;
      while (left < right) {
          if (array[left] === toMove && array[right] === toMove) {
              right--;
          } if (array[left] === toMove && array[right] !== toMove) {
              swap(array, left, right);
              left++;
              right--;
          } if (array[left] !== toMove) {
              left++;
          }
          
      }
      return array;
  }
  
  const swap = (array, left, right) => {
      [array[left], array[right]] = [array[right], array[left]];
  } 