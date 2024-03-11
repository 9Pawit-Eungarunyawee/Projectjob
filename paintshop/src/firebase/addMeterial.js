import firebase_app from "./config";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import getDoument from "./getData";

const db = getFirestore(firebase_app);

export default async function addMaterial(collectionName, data) {
  let result = null;
  let error = null;

  try {
    const img = data.img ? data.img : "";

    // เตรียมข้อมูลที่ต้องการเพิ่ม
    const productData = {
      name: data.name,
      detail: data.detail,
      status: data.status,
      img: img,
      productSizes: data.productSizes,
      delete: null,
      create: {
        createAt: serverTimestamp(),
        createBy: data.user_id,
      },
      update: null,
      isMaterial: true,
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

export async function editMaterial(colllection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
    console.log("แก้ไขสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:", error);
  }

  return { result, error };
}
