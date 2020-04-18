import moment from "moment";
import * as firebase from "firebase/app";
import { Firestore } from "../setup/firebase";
// Style & UI Framework imports
import { message } from "antd";

export const createNewTodoApi = (data) => {
  Firestore.collection("todos")
    .add({
      todoContent: data.todoContent,
      tags: data.tags,
      todoPriority: data.todoPriority,
      todoDate: firebase.firestore.Timestamp.fromDate(data.todoDate),
      mode: data.mode,
      type: data.type,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date()),
      deletedAt: null,
      status: false,
    })

    .then((docRef) => {
      console.log("Document CREATED with ID: ", docRef);
      message.success("New to-do created!");
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

export const getTodosByMode = (mode, date) => {
  let data = [];
  let startDate = new Date(`${date.getFullYear()}-${date.getMonth() + 1}`);
  let endDate = new Date(`${date.getFullYear()}-${date.getMonth() + 2}`);
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}`);

  if (mode === "month") {
    console.log("API MODE => ", mode);

    Firestore.collection("todos")
      .where("mode", "==", mode)
      .where("status", "==", false)
      .where("todoDate", ">=", startDate)
      .where("todoDate", "<", endDate)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        console.log(snapshot.docs);
        snapshot.forEach((doc) => {
          let obj = doc.data();
          obj["document"] = doc.id;
          data.push(obj);
          console.log(doc.id, "=>", obj.mode);
        });
        data = snapshot;
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }
  if (mode === "year") {
    console.log("API MODE => ", mode);
    Firestore.collection("todos")
      .where("mode", "==", mode)
      .where("status", "==", false)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        console.log(snapshot.docs);
        snapshot.forEach((doc) => {
          let obj = doc.data();
          obj["document"] = doc.id;
          data.push(obj);
          console.log(doc.id, "=>", obj.mode);
        });
        data = snapshot;
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }

  return data;
};
