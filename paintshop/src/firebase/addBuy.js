import firebase_app from "./config";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  setDoc,
  doc,
  increment,
} from "firebase/firestore";
import editData from "./editData";


const db = getFirestore(firebase_app);

export default async function addBuy(collectionName, data) {
  let result = null;
  let error = null;

  try {
    // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้

    const buyData = {
      name: data.name,
      createAt: Timestamp.fromDate(new Date(data.createAt)),
      // products: data.products.map((product) => ({
      //   ...product,
      //   product_exp: Timestamp.fromDate(new Date(product.product_exp)),
      // })),
      products: data.products,
      discount: data.discount !== "" ? data.discount : 0,
      shippingCost: data.shippingCost !== "" ? data.shippingCost : 0,
      user_id: data.user_id,
      totalCost: data.totalCost,
      status: "สำเร็จ",
    };

    result = await addDoc(collection(db, collectionName), buyData);

    console.log("สร้างรายการซื้อสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการสร้างรายการซื้อ:", error);
  }

  return { result, error };
}
export async function editBuy(collection, id, data) {
  let result = null;
  let error = null;



  try {
    // แก้ไขข้อมูลของเอกสารที่ระบุใน collection
    const buyData = {
      name: data.name,
      createAt: Timestamp.fromDate(new Date(data.createAt)),
      products: data.products,
      discount: data.discount !== "" ? data.discount : 0,
      shippingCost: data.shippingCost !== "" ? data.shippingCost : 0,
      user_id: data.user_id,
      totalCost: data.totalCost,
      status: "สำเร็จ",
    };
    // แก้ไขข้อมูลเอกสาร
    result = await setDoc(doc(db, collection, id), buyData, { merge: true });
    console.log("แก้ไขข้อมูลเอกสารสำเร็จ:", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูลเอกสาร:", error);
  }

  return { result, error };
}

export async function cancelBuy(colllection, id) {
  let result = null;
  let error = null;

  const buyData = {
    status: "ยกเลิก",
  };

  try {
    result = await setDoc(doc(db, colllection, id), buyData, {
      merge: true,
    });
    console.log("ยกเลิกรายการสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการยกเลิกรายการข้อมูล:", error);
  }

  return { result, error };
}
