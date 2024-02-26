import { AuthContextProvider } from "@/context/AuthContext";
import ProductProvider from "@/context/ProductContext";
import CatalogProvider from "@/context/CatalogContext";
import UserProvider from "@/context/UserContext";
import "@/styles/globals.css";
import BuyProvider from "@/context/BuyContext";
import OrderProvider from "@/context/OrderContext";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ProductProvider>
        <CatalogProvider>
          <UserProvider>
            <BuyProvider>
              <OrderProvider>
                <Component {...pageProps} />
              </OrderProvider>
            </BuyProvider>
          </UserProvider>
        </CatalogProvider>
      </ProductProvider>
    </AuthContextProvider>
  );
}
