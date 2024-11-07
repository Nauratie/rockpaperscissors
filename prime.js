let n = prompt("Put a number:");
let prime = 2; 

function isPrime(n) {
  for (let i = 3; i < n; i++) {
    for (let j = 2; j < i; j++)
      if (i%j == 0) {
      break;
    } else {
      let prime = prime +=`, ${i}`;
    }
  }

alert(prime);
}

isPrime(n);