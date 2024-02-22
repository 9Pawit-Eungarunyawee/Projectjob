import { AuthContextProvider } from "@/context/AuthContext";
import ProductProvider from "@/context/ProductContext";
import CatalogProvider from "@/context/CatalogContext";
import UserProvider from "@/context/UserContext";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ProductProvider>
        <CatalogProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </CatalogProvider>
      </ProductProvider>
    </AuthContextProvider>
  );
}
