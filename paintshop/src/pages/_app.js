import { AuthContextProvider } from "@/context/AuthContext";
import ProductProvider from "@/context/ProductContext";
import CatalogProvider from "@/context/CatalogContext";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ProductProvider>
        <CatalogProvider>
          <Component {...pageProps} />
        </CatalogProvider>
      </ProductProvider>
    </AuthContextProvider>
  );
}
