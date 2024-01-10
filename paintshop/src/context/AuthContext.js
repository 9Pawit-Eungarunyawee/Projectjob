import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Backdrop, CircularProgress } from "@mui/material";

const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);
export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [role, setRole] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        // ตรวจสอบว่าผู้ใช้เป็น admin หรือไม่
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists() && userDocSnap.data().role == "admin") {
          setRole("admin");
          console.log("ADMIN");
        } else if (
          userDocSnap.exists() &&
          userDocSnap.data().role == "employee"
        ) {
          setRole("employee");
          console.log("employee");
        } else {
          setRole("user");
          console.log("user");
        }
      } else {
        setUser(null);
        setRole("");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role }}>
      {loading ? (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
