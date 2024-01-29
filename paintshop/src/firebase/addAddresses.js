import firebase_app from "./config";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addAddress(collectionName, uid, data) {
  let result = null;
  let error = null;

  try {
    // Prepare data to be added
    const newAddressData = {
      address: data.address,
      province: data.provinceName,
      amphure: data.amphureName,
      tambon: data.tambonName,
      zipcode: data.zipCode,
    };

    // Update the document with the new address data added to the 'addresses' array
    const userRef = doc(db, collectionName, uid);
    await updateDoc(userRef, {
      addresses: arrayUnion(newAddressData),
    });

    console.log("เพิ่มข้อมูลสำเร็จ");
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล:", error);
  }

  return { result, error };
}
