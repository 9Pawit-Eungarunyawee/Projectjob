import firebase_app from "../firebase/config";
import {
  getFirestore,
  doc,
  getDoc,
  where,
  query,
  collection,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getDoument(collection, id) {
  const docRef = doc(db, collection, id);

  try {
    const result = await getDoc(docRef);
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
}

const getCollection = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return { result: querySnapshot, error: null };
};

export { getCollection };

const getColors = async (collectionName, catalog_id) => {
  const catalogRef = doc(db, "catalog", catalog_id);
  const q = query(
    collection(db, collectionName),
    where("catalog_id", "==", catalogRef)
  );
  const querySnapshot = await getDocs(q);

  return { result: querySnapshot, error: null };
};

export { getColors };

const getCart = async (collectionName, uid) => {
  const q = query(
    collection(db, collectionName),
    where("user_id", "==", String(uid))
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // Access data using doc.data()
    console.log(doc.id, " => ", doc.data());
  });

  return { result: querySnapshot, error: null };
};

export { getCart };

const getProductDetails = async (productIds) => {
  const products = [];

  for (const productId of productIds) {
    const productDoc = await getDoc(doc(db, "products", productId));
    if (productDoc.exists()) {
      const productData = productDoc.data();
      // Assuming there's an 'image' field in your product data
      const productDetails = { id: productId, ...productData };
      products.push(productDetails);
    }
  }

  return products;
};

export { getProductDetails };

const getColorDetails = async (colorIds) => {
  const colors = [];

  for (const colorId of colorIds) {
    const colorDoc = await getDoc(doc(db, "colors", colorId));
    if (colorDoc.exists()) {
      const colorData = colorDoc.data();
      // Assuming there's an 'image' field in your product data
      const colorDetails = { id: colorId, ...colorData };
      colors.push(colorDetails);
    }
  }

  return colors;
};
export { getColorDetails };
const getUser = async (collectionName, uid) => {
  const q = query(
    collection(db, collectionName),
    where("uid", "==", String(uid))
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // Access data using doc.data()
    console.log(doc.id, " => ", doc.data());
  });

  return { result: querySnapshot, error: null };
};

export { getUser };

const getProduct = async (collectionName, catalog_id) => {
  // Create a reference to the catalog document
  const catalogRef = doc(db, "catalog", catalog_id);

  // Get the catalog document
  const catalogDoc = await getDoc(catalogRef);

  if (!catalogDoc.exists()) {
    console.error("Catalog document not found");
    return { result: null, error: "Catalog document not found" };
  }

  // Now, use the catalog_id in the query
  const q = query(
    collection(db, collectionName),
    where("catalog_id", "==", catalogRef)
  );

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // Access data using doc.data()
      console.log(doc.id, " => ", doc.data());
    });

    return { result: querySnapshot, error: null };
  } catch (error) {
    console.error("Error getting products: ", error);
    return { result: null, error };
  }
};

export { getProduct };
