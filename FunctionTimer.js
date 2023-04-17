function sampleFunction() {
  for (let i = 0; i < 1000000000; i++) {
    let a = i * i;
  }
}

console.time("myFunction");
sampleFunction();
console.timeEnd("myFunction");
