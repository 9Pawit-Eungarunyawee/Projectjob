import firebase_app from "./config";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
  getDoc
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

export async function editAddress(collection, id, data) {
  let result = null;
  let error = null;

  try {
    // ดึงข้อมูลปัจจุบัน
    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);
    const currentData = docSnap.data();

    // อัพเดตเฉพาะออบเจกต์ที่เป็น array
    const newData = {
      ...currentData,
      ...data,
      addresses: data.addresses || currentData.addresses, // ถ้าไม่ได้ส่ง addresses มาใหม่จะใช้ข้อมูลเดิม
    };

    // อัพเดตข้อมูลใน Firestore
    result = await setDoc(docRef, newData);

    console.log("แก้ไขสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:", error);
  }

  return { result, error };
}
