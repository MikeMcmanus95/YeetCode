class Stack {
      constructor() {
          this.stack = [];
          this.length = 0;
      }
  
      pop() {
          this.stack.pop();
          this.length--;
      }
  
      push(v) {
          this.stack.push(v);
          this.length++;
      }
  
      increment(i, v) {
          for (let j = 0; j < i; j++) {
              this.stack[j] += v;
          }
      }
  
      getTop() {
           console.log(this.stack[this.length - 1] || 'EMPTY');
      }
  }
  
  function superStack(operations) {
      let stack = new Stack();
      for (let i = 0; i < operations.length; i++) {
          let task = operations[i];
          if (task.startsWith('push')) {
              // console.log('pushing', (task.split(' ')[1]))
              const val = Number(task.split(' ')[1])
              stack.push(val)         
          } else if (task.startsWith('pop')) {
              // console.log('pop')
              stack.pop();
          } else {
              let [_, val1, val2] = task.split(' ');
              stack.increment(Number(val1), Number(val2))
          }
          stack.getTop();
      }
  }  