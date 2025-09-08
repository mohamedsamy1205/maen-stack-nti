// console.log("hh");
// var a = 10;
// console.log(a);

// setTimeout(() => {
//   console.log(a);
// }, 1000);

// // async
// // window.prompt("enter you name");

// // problem : call back hell
// // sol : promise
// setTimeout(() => {
//   var id = [1, 2, 3, 4];
//   console.log(id);
//   setTimeout(() => {
//     var user = {
//       id: id[1],
//       name: "malak",
//     };
//     console.log(user);
//     setTimeout(() => {
//       var adds = {
//         id: id[1],
//         address: "3 ... street",
//       };
//       console.log(adds);
//     }, 1000);
//   }, 1000);
// }, 1000);

// var promise = new Promise(function (resolve, reject) {
//   let a = 5,
//     b = 4;
//   if (a > b) {
//     resolve("greater", a);
//   } else {
//     reject("smaller", b);
//   }
// });
// console.log(promise);

var getId = new Promise(function (resolve, reject) {
  var id = [1, 2, 3, 4];
  if (id) {
    resolve(id);
  } else {
    reject("no data found ");
  }
});

// getId
//   .then((id) => {
//     console.log(id);
//     return id;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const get = (id) => {
  return new Promise((resolve, reject) => {
    var users = {
      id: id,
      name: "menna",
    };
    if (users) {
      resolve(users);
    } else {
      reject("user not found");
    }
  });
};
// get(2)
//   .then((users) => {
//     console.log(users);
//     return users;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getadd = (user) => {
  return new Promise((resolve, reject) => {
    var add = {
      id: user.id,
      city: "cairo",
    };
    if (add) {
      resolve(add);
    } else {
      reject("Failed");
    }
  });
};

// getAddress(users)
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

getId
  .then((id) => {
    console.log(id);
    return get(id[1]);
  })
  .then((user) => {
    console.log(user);
    return getadd(user);
  })
  .then((address) => {
    console.log(address);
  });