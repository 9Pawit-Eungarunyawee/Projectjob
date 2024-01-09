import firebase_app from "./config";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addOrder(collectionName, data) {
  let result = null;
  let error = null;
console.log("wwwwww",data)
  // สร้างอ้างอิงไปยังเอกสารในคอลเลคชัน "cart"
  const currentDate = new Date();
  const img = data.img ? data.img : "";
  try {
    // เตรียมข้อมูลที่ต้องการเพิ่ม
    const orderData = {
      cart_id: data.cart_id, // ใช้อ้างอิง
      user_id:data.user_id,
      price: data.price,
      date:currentDate,
      img: img,
      status:data.status,
    };
    console.log(orderData);
    // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้
    result = await addDoc(collection(db, collectionName), orderData);

    console.log("เพิ่มข้อมูลสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล:", error);
  }

  return { result, error };
}
