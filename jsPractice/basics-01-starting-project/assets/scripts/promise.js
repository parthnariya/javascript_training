const url = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
];

// Promise.all(
//   url.map(link => {
//     return fetch(link).then((res) => res.json());
//   })
// ).then((results) => {
//   console.log(results[0]);
//   console.log(results[1]);
// });

// const getData = async function () {
//   try {
//     const [user, posts] = await Promise.all(
//       url.map((link) => {
//         return fetch(link).then((res) => res.json());
//       })
//     );
//     console.log(user);
//     console.log(posts);
//   } catch(err) {
//     console.log(err);
//   }
// };
// getData();

const getData2 = async function () {
    const arrayOfLinks = url.map(link => fetch(link));
    for await ( let request of arrayOfLinks){
        const data = await request.json();
        console.log(data);
    }
}
