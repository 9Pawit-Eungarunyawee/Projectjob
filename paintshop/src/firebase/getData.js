import firebase_app from "../firebase/config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getDoument(collection, id) {
  let docRef = doc(db, collection, id);
  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
import { collection, query, where, getDocs } from "firebase/firestore";

const getCollection = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return { result: querySnapshot, error: null };
};

export { getCollection };


const getCart = async (collectionName, uid) => {
  const q = query(collection(db, collectionName), where("user_id", "==", String(uid)));
  
  const querySnapshot = await getDocs(q);
  
  querySnapshot.forEach((doc) => {
    // Access data using doc.data()
    console.log(doc.id, " => ", doc.data());
  });

  return { result: querySnapshot, error: null };
};

export { getCart };
