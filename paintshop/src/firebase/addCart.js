import firebase_app from "./config";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addCart(collectionName, data) {
  let result = null;
  let error = null;

  // สร้างอ้างอิงไปยังเอกสารในคอลเลคชัน "catalog"
  const productRef = doc(db, "products", data.product_id);
  const colorRef = doc(db, "colors", data.color_id);
  try {
    // เตรียมข้อมูลที่ต้องการเพิ่ม
    const cartData = {
      product_id: productRef, // ใช้อ้างอิง
      color_id: colorRef,
      user_id:data.user_id,
      price: data.price,
      amount: data.amount,
    };
    console.log(cartData);
    // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้
    result = await addDoc(collection(db, collectionName), cartData);

    console.log("เพิ่มข้อมูลสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล:", error);
  }

  return { result, error };
}
