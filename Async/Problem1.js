function job() {
  return new Promise((res, reject) => {
    setTimeout(() => {
      res("hello world");
    }, 2000);
  });
}

async function runMyJob() {
  try {
    console.log("Start");
    const data = await job();
    console.log(data);
    console.log("End");
  } catch (err) {
    console.error(err);
  }
}

runMyJob();
