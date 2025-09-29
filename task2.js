function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  
    let sum = 0;
    for (let item of initialArray) {
      if (typeof item === "number") {
        sum += item;
      }
    }
  
    console.log(sum);
  }
  
  calculateSumOfArray(); 
  