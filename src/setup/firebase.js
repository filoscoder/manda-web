import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import { FIREBASE_CONFIG } from "./config";

firebase.initializeApp(FIREBASE_CONFIG);

export const Firestore = firebase.firestore();
export const Auth = firebase.auth();
