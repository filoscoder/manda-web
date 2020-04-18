import { Auth, Firestore } from "../setup/firebase";
// Style & UI Framework imports
import { message } from "antd";

export const signUpUserWithEmailAndPasswordApi = (signupData) => {
  Auth.createUserWithEmailAndPassword(signupData.email, signupData.password)
    .then((cred) => {
      if (cred.user) {
        Firestore.collection("users")
          .doc(cred.user.uid)
          .set({
            email: signupData.email,
            verified: false,
            nickname: signupData.nickname,
          })
          .catch(function (error) {
            console.error("Error adding [Users] doc: ", error);
            message.error(error.message);
          });
      }
    })
    .catch((error) => {
      // Handle Errors here.
      console.log("!Error[SIGN-UP] => ", error);
      message.error(error.message);
    });
};
