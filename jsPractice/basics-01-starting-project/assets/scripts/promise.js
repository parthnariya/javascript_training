const url = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
];

Promise.all(
  url.map(link => {
    return fetch(link).then((res) => res.json());
  })
).then((results) => {
  console.log(results[0]);
  console.log(results[1]);
});
