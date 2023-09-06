import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvvhGyeTZ6d53E5gJnPV7jWJHpNtjqtFI",
  authDomain: "netflix-1clone.firebaseapp.com",
  projectId: "netflix-1clone",
  storageBucket: "netflix-1clone.appspot.com",
  messagingSenderId: "274702504765",
  appId: "1:274702504765:web:c7e039c47eb2e3d8d4ab54",
  measurementId: "G-9QNPDBGVMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);







// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };

// const app = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(app);

