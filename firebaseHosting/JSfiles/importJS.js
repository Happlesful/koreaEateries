function importJS() {
  URLs.forEach((URL) => {
    const script = document.createElement("script");
    script.src = URL;
    script.async = true;
    document.body.append(script);
  });
}

const URLs = [
  // FOR RUNNING THE SERVER IN FIREBASE
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js",
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js",
  "./JSfiles/firebaseConfig.js",

  // SCRIPTS USED IN THIS HTML
  "./JSfiles/readMatJibData.js",
  "./JSfiles/writeMatJibData.js",
  "./JSfiles/formatRestaurant.js",
  "./JSfiles/formatMenuDropdown.js",
  "./JSfiles/formatNavigationTag.js",
  "./JSfiles/formatPagination.js",
  "./JSfiles/handleAllSearchPagination.js",

  // FOR RUNNING A REACT COMPONENT IN HTML
  "https://unpkg.com/react@18/umd/react-development",
  "https://unpkg.com/react-dom@18/umd/react-dom-development",
  "https://unpkg.com/@babel/standalone/babel-min",
];

importJS();
