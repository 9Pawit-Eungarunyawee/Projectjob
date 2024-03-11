import firebase_app from "./config";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import getDoument from "./getData";

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
      detail: data.detail,
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

export async function softDeleteCatalog(collection, data) {
  let result = null;
  let error = null;

  try {
    // ดึงข้อมูลผู้ใช้จากไอดี
    const userDocument = await getDoument("users", data.user_id);

    if (userDocument.result && userDocument.result.exists) {
      const username = userDocument.result.data().name; // แก้ไขตรงนี้ตามโครงสร้างของข้อมูลผู้ใช้

      const deletedata = {
        delete: {
          deleteAt: serverTimestamp(),
          deleteBy: username, // ใช้ชื่อผู้ใช้แทนไอดี
        },
      };

      result = await setDoc(doc(db, collection, data.id), deletedata, {
        merge: true,
      });

      console.log("Soft delete สำเร็จ", result);
    } else {
      console.log("หาข้อมูล user ใน soft del ไม่เจอ");
    }
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการ soft delete:", error);
  }

  return { result, error };
}

export async function restoreCatalog(colllection, id) {
  let result = null;
  let error = null;

  const data = {
    delete: null,
  };
  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
    console.log("restoreCatalog สำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการ restoreCatalog:", error);
  }

  return { result, error };
}
