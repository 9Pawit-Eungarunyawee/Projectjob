import firebase_app from "./config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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
      products_id: data.products_id,
      user_id: data.user_id,
      reason: data.reason,
      reason_detail: data.reason_detail,
      bank_detail: data.bank_detail,
      order_id: data.order_id,
      createAt: currentDate,
      img: img,
      //   vid: vid,
      status: data.status,
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
