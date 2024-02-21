import firebase_app from "./config";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addBuy(collectionName, data) {
  let result = null;
  let error = null;

  try {
    // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้

    const productData = {
      name: data.name,
      createAt: Timestamp.fromDate(new Date(data.createAt)),
      products: data.products.map((product) => ({
        ...product,
        product_exp: Timestamp.fromDate(new Date(product.product_exp)),
      })),
      discount: data.discount,
      shippingCost: data.shippingCost,
      user_id: data.user_id,
      totalCost: data.totalCost,
      status: "สำเร็จ",
    };

    result = await addDoc(collection(db, collectionName), productData);

    console.log("สร้างรายการซื้อสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการสร้างรายการซื้อ:", error);
  }

  return { result, error };
}
