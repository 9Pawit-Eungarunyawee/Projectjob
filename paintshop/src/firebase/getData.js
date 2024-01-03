import firebase_app from "../firebase/config";
import { getFirestore, doc, getDoc ,where,query} from "firebase/firestore";

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
import { getDocs, collection } from "firebase/firestore";

const getCollection = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return { result: querySnapshot, error: null };
};

export { getCollection };

const getColors= async (collectionName,catalog_id) => {
  const catalogRef = doc(db, "catalog", catalog_id)
  const q = query(collection(db, collectionName), where('catalog_id', '==', catalogRef));
  const querySnapshot = await getDocs(q);
  
  return { result: querySnapshot, error: null };
};

export { getColors };