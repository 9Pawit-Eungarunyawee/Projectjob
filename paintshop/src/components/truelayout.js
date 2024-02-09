import CatalogProvider from "@/context/CatalogContext";
import ProductProvider from "@/context/ProductContext";

export default function TrueLayout({ children }) {
  return (
    <ProductProvider>
      {children}
    </ProductProvider>
  );
}
