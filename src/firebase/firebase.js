import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZY0MEBs0lG8iem-uR__mSMPeK2FmjeeE",
    authDomain: "expensify-35fd9.firebaseapp.com",
    projectId: "expensify-35fd9",
    databaseURL: 'https://expensify-35fd9-default-rtdb.firebaseio.com/',
    storageBucket: "expensify-35fd9.appspot.com",
    messagingSenderId: "953021458668"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').push({
//     amount: 2025,
//     createdAt: 1641395016630,
//     description: "water bill ",
//     note: "here is my water bill"
// });

// database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val());
// })

// database.ref('expenses').once('value').then((snapshot)=>{
//     let expenses = [];
//     snapshot.forEach((snap)=>{
//         expenses.push({
//             id: snap.key,
//             ...snap.val()
//         })
//     });
//     console.log(expenses);
// })


// database.ref('location/city').once('value').then((snapshot)=>{
//     console.log(snapshot.val());
// })

// database.ref().set({
//     name: 'Amogh Gupta',
//     age: 26,
//     isSingle: true,
//     location: {
//         city: 'Kanpur',
//         country: 'India'
//     }
// }).then(()=>{
//     console.log('data saved');
// }).catch((err)=>{
//     console.log(err);
// });

// database.ref('expenses/-Msibs0hFv15C6jN2ITw').remove().then(()=>{
//     console.log("Data was removed");
// }).catch((e)=>{
//     console.log("Did not remove data");
// })

// database.ref().update({
//     name: 'Amogh2',
//     'location/city': 'Kanpur2'
// }).then(()=>{
//     console.log("Data was updated");
// }).catch((e)=>{
//     console.log("Did not update data");
// })