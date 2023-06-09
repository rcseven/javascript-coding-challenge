// Chaining Promise

var promise = job1();

promise

  .then(function (data1) {
    console.log("data1", data1);
    return job2();
  })

  .then(function (data2) {
    console.log("data2", data2);
    return "Hello world";
  })

  .then(function (data3) {
    console.log("data3", data3);
  });

//   Using Async Await
// async function runJobs() {
//   try {
//     const data1 = await job1();
//     console.log("data1", data1);
//     const data2 = await job2();
//     console.log("data2", data2);
//     const data3 = "Hello World";
//     console.log("data3", data3);
//   } catch (err) {
//     console.err(err);
//   }
// }

function job1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("result of job 1");
    }, 1000);
  });
}

function job2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("result of job 2");
    }, 1000);
  });
}
