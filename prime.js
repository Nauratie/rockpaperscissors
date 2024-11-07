let n = prompt("Put a number:");

  outer: for (let i = 3; i < n; i++) {
    for (let j = 2; j < i; j++)
      if (i%j == 0) {
      continue outer;
      }
    alert(i);    
  }