import { collection, getDocs, getFirestore, query, orderBy } from "firebase/firestore";
import firebase_app from "../firebase/config";
const db = getFirestore(firebase_app);

export default async function searchUser(collectionName, field, value) {
  try {
    const lowerCaseField = field.toLowerCase();
    const lowerCaseValue = value.toLowerCase();

    const q = query(collection(db, collectionName), orderBy(lowerCaseField));

    const snapshot = await getDocs(q);

    const results = snapshot.docs
      .filter((doc) => {
        const fieldValue = doc.data()[lowerCaseField];
        return fieldValue && fieldValue.toLowerCase().indexOf(lowerCaseValue) !== -1;
      }) // กรองผลลัพธ์ที่ตรงกับเงื่อนไข
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    return results;
  } catch (error) {
    console.error("Error searching data:", error);
    throw error;
  }
}
