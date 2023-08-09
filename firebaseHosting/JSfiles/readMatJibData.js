function readMatJibData() {
  return new Promise((resolve, reject) => {
    const restaurantsRef = firebase.database().ref("restaurants");
    restaurantsRef.on(
      "value",
      function (snapshot) {
        const restaurants = snapshot.val();
        resolve(restaurants); // Fulfill the promise with the retrieved data
      },
      function (error) {
        reject(error); // Reject the promise if there's an error
      }
    );
  });
}

// const db = await readMatJibData();
// console.log(db);

//node ./firebaseHosting/JSfiles/readMatJibData.js
