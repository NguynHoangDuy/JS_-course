// const endPoint = "https://api.github.com/users/NguynHoangDuy";

// const promise = fetch(endPoint);
// promise
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result.login);
//   });

async function displayUser(userName) {
  const promise = await fetch(`https://api.github.com/users/${userName}`);
  const data = await promise.json();
  return data;
}

async function showAll() {
  const duy = await displayUser("NguynHoangDuy");
  console.log(duy.avatar_url);
}
showAll;
