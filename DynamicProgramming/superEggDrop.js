
// Solution 2: Non-intuitive but fast!
const superEggDrop = function(K, N) {
  const cache = new Array(K + 1).fill(0)
  let steps = 0
  while(cache[K] < N){
    steps++
    for(let eggs = K; eggs > 0; eggs--){
      cache[eggs] = 1 + cache[eggs] + cache[eggs - 1]
    }
  }
  return steps
};
