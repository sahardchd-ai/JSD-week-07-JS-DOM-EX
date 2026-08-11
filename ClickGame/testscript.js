let count = 0;

// 1. Start the interval and store its unique ID
const intervalId = setInterval(() => {
  count+=0.1;
  Math.floor(count);
  console.log(`Count: ${Math.floor(count)}`);

  // 2. Add a condition to stop the loop
  if (count > 5) {
    clearInterval(intervalId); 
    console.log("Interval cleared.");
  }
}, 1000);
