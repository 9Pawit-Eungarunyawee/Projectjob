import firebase_app from "./config";
import { getFirestore, doc, collection, addDoc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addData(collectionName, data) {
  let result = null;
  let error = null;

  // สร้างอ้างอิงไปยังเอกสารในคอลเลคชัน "catalog"
  const catalogRef = doc(db, "catalog", data.catalog_id);

  try {
    const img = data.img ? data.img : "";
   
    // เตรียมข้อมูลที่ต้องการเพิ่ม
    const productData = {
      name: data.name,
      catalog_id: catalogRef, // ใช้อ้างอิง catalogRef
      detail: data.detail,
      flim: data.flim,
      grade: data.grade,
      lot: data.lot,
      status: data.status,
      img: img,
      area:data.area,
      productSizes: data.productSizes,
    };

    // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้
    result = await addDoc(collection(db, collectionName), productData);

    console.log("เพิ่มข้อมูลสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล:", error);
  }

  return { result, error };
}
