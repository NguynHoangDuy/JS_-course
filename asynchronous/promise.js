// function makePromise(buyIphone) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (buyIphone) {
//         resolve("Oh yeah I have a new Iphone");
//       } else {
//         reject("Oh no I dont have a new Iphone");
//       }
//     }, 5000);
//   });
// }
// let havePromise = makePromise(true);
// havePromise
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("First time");
//   }, 3000);
// }).then((result) => {
//   console.log(result);
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second time");
//     }, 1000);
//   }).then((result) => {
//     console.log(result);
//   });
// });

function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("con chó");
    }, time);
  });
}

async function run() {
  console.log("con mèo");
  await wait(2000);
  console.log("Con heo");
}

run();

function makeTimer(time, str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, time);
  });
}

async function allTime() {
  const time1 = await makeTimer(1000, "First Time");
  console.log(time1);
  console.log("hihihi");
}

allTime();
