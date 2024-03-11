import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import firebase_app from "../config";

const auth = getAuth(firebase_app);
export default async function forgetPassword(email) {
  let result = null,
    error = null;
  try {
    result = await sendPasswordResetEmail(auth, email);
    console.log("ส่งลิงค์ไปยังอีเมลแล้ว",result)
  } catch (e) {
    error = e;
    console.log("ไม่สามารถส่งไปยังอีเมลได้",error)
  }
  return { result, error };
}
