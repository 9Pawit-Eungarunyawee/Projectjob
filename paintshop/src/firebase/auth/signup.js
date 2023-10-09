import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import addData from "../addData";
import editData from "../editData";
const auth = getAuth(firebase_app);

export default async function signUp(
  email,
  password,
  address,
  tel,
  name,
  profileUrl,
  provinceName,
  amphureName,
  tambonName,
  selected
) {
  let result = null;
  let error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    const newUser = {
      uid: user.uid,
      email: user.email,
      name: name,
      address: address,
      province: provinceName,
      amphure: amphureName,
      tambon: tambonName,
      tel: tel,
      profileUrl: profileUrl,
      isAdmin: false,
    };
    await addData("users", user.uid, newUser);
    console.log("สร้างผู้ใช้สำเร็จ:" + user.uid);
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูลผู้ใช้:", error);
    return { result: null, error };
  }

  return { result, error };
}
