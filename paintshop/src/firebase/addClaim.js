import firebase_app from "./config";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addClaim(collectionName, data) {
  let result = null;
  let error = null;
  console.log("wwwwww", data);
  // สร้างอ้างอิงไปยังเอกสารในคอลเลคชัน "claims"
  const currentDate = new Date();
  const img = data.img ? data.img : "";
  //   const vid = data.vid ? data.vid : "";
  try {
    // เตรียมข้อมูลที่ต้องการเพิ่ม
    const claimData = {
      user_id: data.user_id,
      reason: data.reason,
      reason_detail: data.reason_detail,
      bank_detail: data.bank_detail,
      order_id: data.order_id,
      createAt: currentDate,
      img: img,
      //   vid: vid,
      status: data.status,
      tracker:null,
    };
    console.log(claimData);
    result = await addDoc(collection(db, collectionName), claimData);

    console.log("เพิ่มข้อมูลสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล:", error);
  }

  return { result, error };
}
const editClaim = async (id, data) => {
  let result = null;
  let error = null;
  try {
    result = await setDoc(doc(db, "claims", id), data, {
      merge: true,
    });
    console.log("แก้ไขข้อมูลสำเร็จ");
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:", error);
  }

  return { result, error };
};

export { editClaim };
const confirmCliam = async (id) => {
  let result = null;
  let error = null;
  try {
    const data = {
      status: "ยืนยันการเคลม",
    };
    result = await setDoc(doc(db, "claims", id), data, {
      merge: true,
    });
    console.log("ยืนยันการเคลมสำเร็จ", result);
  } catch (e) {
    error = e;
    console.log("เกิดข้อผิดพลาดในการยืนยันการเคลม", error);
  }
  return { result, error };
};
export { confirmCliam };

const cancelCliam = async (id) => {
  let result = null;
  let error = null;
  try {
    const data = {
      status: "ยกเลิกการเคลม",
    };
    result = await setDoc(doc(db, "claims", id), data, {
      merge: true,
    });
    console.log("ยกเลิกการเคลมสำเร็จ", result);
  } catch (e) {
    error = e;
    console.log("เกิดข้อผิดพลาดในการยกเลิกการเคลม", error);
  }
  return { result, error };
};
export { cancelCliam };
