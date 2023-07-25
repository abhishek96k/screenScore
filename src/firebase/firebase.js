import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFlVE9nrkYj04MywA3IUR9k6dXNi7SltU",
  authDomain: "screenscore-f73b2.firebaseapp.com",
  projectId: "screenscore-f73b2",
  storageBucket: "screenscore-f73b2.appspot.com",
  messagingSenderId: "789079962502",
  appId: "1:789079962502:web:3901000d7fd55c57d6b207"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
