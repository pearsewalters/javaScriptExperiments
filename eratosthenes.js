function eratosthenes(upperBound) {
  console.time();
  let primes = [];
  for (let i = 2; i <= upperBound; i++) {
    primes.push(i);
  }
  for (let p = 0; p < primes.length; p++) {
    for (let q = p+1; q < primes.length; q++) {
      if (primes[q]) {
        // console.log(primes[p], primes[q], primes[q]%primes[p]);
        if (primes[q]%primes[p] == 0) primes.splice(q,1)
      }
    }
    (function(){
        setTimeout( () => console.log(`${primes[p]} is prime.`),1000 * (p+1))
    })();

  }
  // for (let p = 0; p < primes.length; p++) {
  //   let test = primes[p];
  //   console.log('current test: ' + test)
  //   for (let t = p; t < primes.length; t++) {
  //     console.log(primes[t] + '%' + test + '=' + (primes[t]%test))
  //     if (primes[t] % test == 0) {
  //       console.log('canned ' + primes[t])
  //       primes.splice(t,1);
  //     }
  //   }
  // }
  // return primes;
  console.timeEnd()
}

/*
* 1. set an upperBound
* 2. create a range from 2 to upperBound
* 3. starting with the first value in the range,
*   test subsequent value for divisibility
* 4. if divisible, remove this element from the range, then test
*   next value
* 5. if indivisible, test next value
*/
