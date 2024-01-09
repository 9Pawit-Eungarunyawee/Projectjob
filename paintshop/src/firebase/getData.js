import firebase_app from "../firebase/config";
import { getFirestore, doc, getDoc, where, query , collection,

  getDocs,
  updateDoc,} from "firebase/firestore";

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

const updateAmount = async (cartIds, newAmount) => {
  console.log("Updating amount for cartId:", cartIds);

  const q = query(collection(db, "cart"), where("id", "==", String(cartIds)));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size > 0) {
    const docRef = querySnapshot.docs[0].ref;

    try {
      await updateDoc(docRef, {
        amount: newAmount,
      });

      console.log("Document successfully updated for cart ID:", cartIds);
    } catch (error) {
      console.error("Error updating document for cart ID:", cartIds, error);
    }
  } else {
    console.error("Document not found for cart ID:", cartIds);
  }
};
export { updateAmount };

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
