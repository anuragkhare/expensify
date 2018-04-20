import * as firebase from "firebase";
// import moment from "moment";
// import * as R from "ramda";

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// });

// const expenses = [
//   { description: "Rent", amount: 1500500, createdAt: moment().toJSON() },
//   { description: "Coffee", amount: 300, createdAt: moment().toJSON() },
//   { description: "Magazines", amount: 9100, createdAt: moment().toJSON() }
// ];

// R.map(e => database.ref("expenses").push(e), expenses);
