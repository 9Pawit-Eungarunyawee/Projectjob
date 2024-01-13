import firebase_app from "./config";
import { getFirestore, doc, collection, addDoc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addCatalog(collectionName, data) {
  let result = null;
  let error = null;


  try {
    const img = data.img ? data.img : "";
   
    // เตรียมข้อมูลที่ต้องการเพิ่ม
    const catalogData = {
      name: data.name,
      img: img,
      detail:data.detail
    };

    // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้
    result = await addDoc(collection(db, collectionName), catalogData);

    console.log("เพิ่มข้อมูลสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล:", error);
  }

  return { result, error };
}
