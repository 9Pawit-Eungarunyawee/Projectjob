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
      area: data.area,
      productSizes: data.productSizes,
      delete: null,
      create: {
        createAt: serverTimestamp(),
        createBy: data.user_id,
      },
      update: null,
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

const deleteData = async (collectionName, id) => {
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
export { deleteData };

export async function softDeleteData(collection, data) {
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

export async function restoreData(colllection, id) {
  let result = null;
  let error = null;

  const data = {
    delete: null,
  };
  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
    console.log("restoreData สำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการ restoreData:", error);
  }

  return { result, error };
}
