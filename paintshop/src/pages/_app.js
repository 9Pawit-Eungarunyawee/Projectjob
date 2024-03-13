import { AuthContextProvider } from "@/context/AuthContext";
import ProductProvider from "@/context/ProductContext";
import CatalogProvider from "@/context/CatalogContext";
import UserProvider from "@/context/UserContext";
import "@/styles/globals.css";
import BuyProvider from "@/context/BuyContext";
import OrderProvider from "@/context/OrderContext";
import ColorProvider from "@/context/ColorContext";
import ClaimProvider from "@/context/ClaimContext";
import CartProvider from "@/context/CartContext";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ProductProvider>
        <CatalogProvider>
          <ColorProvider>
            <UserProvider>
              <BuyProvider>
                <OrderProvider>
                  <ClaimProvider>
                    <CartProvider>
                      <Component {...pageProps} />
                    </CartProvider>
                  </ClaimProvider>
                </OrderProvider>
              </BuyProvider>
            </UserProvider>
          </ColorProvider>
        </CatalogProvider>
      </ProductProvider>
    </AuthContextProvider>
  );
}
