import firebase_app from "../firebase/config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function editData(colllection, id, data) {
  let result = null;
  let error = null;
  
  if(data.catalog_id){
    const catalogRef = doc(db, "catalog", data.catalog_id);
    data.catalog_id = catalogRef
  }

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
    console.log("แก้ไขสำเร็จ",result)
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:", error);
  }

  return { result, error };
}