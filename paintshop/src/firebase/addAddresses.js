import firebase_app from "./config";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addAddress(collectionName, uid, data) {
  let result = null;
  let error = null;

  try {
    // Prepare data to be added
    const newAddressData = {
      address: data.address,
      province: data.provinceName,
      amphure: data.amphureName,
      tambon: data.tambonName,
      zipcode: data.zipCode,
    };

    // Update the document with the new address data added to the 'addresses' array
    const userRef = doc(db, collectionName, uid);
    await updateDoc(userRef, {
      addresses: arrayUnion(newAddressData),
    });

    console.log("เพิ่มข้อมูลสำเร็จ");
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล:", error);
  }

  return { result, error };
}

export async function editAddress(collection, id, addressIndex, data) {
  let result = null;
  let error = null;

  try {
    // Get current data
    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);
    const currentData = docSnap.data();

    // Update addresses with the new data at the specified index
    if (currentData.addresses && currentData.addresses.length > addressIndex) {
      currentData.addresses[addressIndex] = data;

      // Update data in Firestore
      result = await setDoc(docRef, currentData);

      console.log("แก้ไขสำเร็จ", result);
    } else {
      throw new Error("Index out of range or addresses is not properly initialized");
    }
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:", error);
  }

  return { result, error };
}


const deleteAddress = async (id, addressIndex) => {
  let result = null;
  let error = null;

  try {
    // อ้างอิงไปยังเอกสารที่ต้องการลบ
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // ดึงข้อมูลเอกสาร
      const userData = docSnap.data();
      const addresses = userData.addresses || [];

      // ตรวจสอบว่า addressIndex มีข้อมูลหรือไม่
      if (addressIndex >= 0 && addressIndex < addresses.length) {
        // ลบที่อยู่ที่ต้องการโดยการลบออกจากอาร์เรย์ addresses
        addresses.splice(addressIndex, 1);

        // อัปเดตข้อมูลที่อยู่ในเอกสาร
        await updateDoc(docRef, { addresses });

        console.log("ลบข้อมูลสำเร็จ");
        result = "Success";
      } else {
        // หาก addressIndex ไม่ถูกต้อง
        throw new Error("Index out of range");
      }
    } else {
      // หากไม่พบเอกสาร
      throw new Error("Document not found");
    }
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
  }

  return { result, error };
};

export { deleteAddress };
