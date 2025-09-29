function printSeasonByMonth(month) {
    const winter = ["DECEMBER", "JANUARY", "FEBRUARY"];
    const spring = ["MARCH", "APRIL", "MAY"];
    const summer = ["JUNE", "JULY", "AUGUST"];
    const autumn = ["SEPTEMBER", "OCTOBER", "NOVEMBER"];
  
    if (winter.includes(month)) {
      console.log("winter");
    } else if (spring.includes(month)) {
      console.log("spring");
    } else if (summer.includes(month)) {
      console.log("summer");
    } else if (autumn.includes(month)) {
      console.log("autumn");
    } else {
      console.log("incorrect month");
    }
  }
  
  
  printSeasonByMonth("SEPTEMBER"); // autumn
  printSeasonByMonth("NOVEMBER");  // autumn
  printSeasonByMonth("JULY");      // summer
  printSeasonByMonth("APRIL");     // spring
  