function job() {
  return new Promise((res, reject) => {
    setTimeout(() => {
      res("hello world");
    }, 2000);
  });
}

async function runJob() {
  try {
    const data = await job();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

module.exports = job;

// Example usage
const myJob = require("./path/to/my/job");

async function runMyJob() {
  try {
    const data = await myJob();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

runMyJob();
