let autoClick = 0;

// 1. Start the interval and store its unique ID
const intervalId = setInterval(() => {
  autoClick+=0.1;
  Math.floor(autoClick);
  console.log(`autoClick: ${Math.floor(autoClick)}`);

  // 2. Add a condition to stop the loop
  if (autoClick > 5) {
    clearInterval(intervalId); 
    console.log("Interval cleared.");
  }
}, );
