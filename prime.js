let n = prompt("Put a number:");
let prime = 2; 

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n%i == 0) {
      continue;
    } else {
      let prime += n;
    }
  }

alert(prime);
}
