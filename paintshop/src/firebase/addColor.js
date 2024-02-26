import firebase_app from "./config";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addColor(collectionName, data) {
  let result = null;
  let error = null;

  try {
    const catalogRef = doc(db, "catalog", data.catalog_id);
    const colorShadeRef = doc(db, "colorshade", data.colorshade_id);

    const colorData = {
      catalog_id: catalogRef,
      colorshade_id: colorShadeRef,
      name: data.name,
      code: data.code,
      code_name: data.codename,
    };
    // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้
    result = await addDoc(collection(db, collectionName), colorData);

    console.log("เพิ่มข้อมูลสีสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูลสี:", error);
  }

  return { result, error };
}

export async function editColor(colllection, id, data) {
  let result = null;
  let error = null;

  try {
    const colorShadeRef = doc(db, "colorshade", data.colorshade_id);

    const colorData = {
      colorshade_id: colorShadeRef,
      name: data.name,
      code: data.code,
      code_name: data.code_name,
    };
    result = await setDoc(doc(db, colllection, id), colorData, {
      merge: true,
    });
    console.log("แก้ไขสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:", error);
  }

  return { result, error };
}

const deleteColor = async (collectionName, id) => {
  let result = null;
  let error = null;
  // อ้างอิงไปยังเอกสารที่ต้องการลบ
  const docRef = doc(db, collectionName, id);

  try {
    // ลบเอกสาร
    await deleteDoc(docRef);

    console.log("ลบข้อมูลสำเร็จ");
    result = "Success";
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
  }

  return { result, error };
};
export {deleteColor}