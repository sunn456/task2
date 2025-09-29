function printPowsOf2(value) {
    if (typeof value !== "number") {
      console.log("incorrect type");
      return;
    }
  
    for (let num = 1; num <= value; num *= 2) {
      console.log(num);
    }
  }
  
  // Тести
  printPowsOf2("302"); // incorrect type
  printPowsOf2(null);  // incorrect type
  printPowsOf2(128);   // 1, 2, 4, 8, 16, 32, 64, 128
  printPowsOf2(60);    // 1, 2, 4, 8, 16, 32
  