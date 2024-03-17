import { getCollection } from "@/firebase/getData";
import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useAuthContext();
  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    const collectionName = "cart";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const data = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCartData(data);
      setLoading(false);
    }
  };
  return (
    <CartContext.Provider
      value={{ cartData, setCartData, fetchCartData }}
    >
      {children}
    </CartContext.Provider>
  );
}
