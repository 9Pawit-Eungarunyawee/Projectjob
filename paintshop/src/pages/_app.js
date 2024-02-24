import { AuthContextProvider } from "@/context/AuthContext";
import ProductProvider from "@/context/ProductContext";
import CatalogProvider from "@/context/CatalogContext";
import UserProvider from "@/context/UserContext";
import "@/styles/globals.css";
import BuyProvider from "@/context/BuyContext";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ProductProvider>
        <CatalogProvider>
          <UserProvider>
            <BuyProvider>
              <Component {...pageProps} />
            </BuyProvider>
          </UserProvider>
        </CatalogProvider>
      </ProductProvider>
    </AuthContextProvider>
  );
}
