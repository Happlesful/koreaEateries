//using a form,  submit the event through write data and let it store the data as the
function writeMatJibData() {
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const dataRef = ref(database, "restaurants");

  //change value to the vales that you want to add into the restaurant database
  //value should be the index of the restaurant and key will be the info of the restauratn
  set(dataRef, { key: "value" })
    .then(() => {
      console.log("Data written successfully");
    })
    .catch((error) => {
      console.error("Error writing data:", error);
    });
}

writeData();

//node ./JSfiles/writeMatJibData.js
