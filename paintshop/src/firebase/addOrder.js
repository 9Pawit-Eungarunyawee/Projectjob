import firebase_app from "./config";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import getDoument from "./getData";
import editData from "./editData";

const db = getFirestore(firebase_app);

export default async function addOrder(collectionName, data) {
  let result = null;
  let error = null;

  const currentDate = new Date();
  const img = data.img ? data.img : "";
  try {
    // เตรียมข้อมูลที่ต้องการเพิ่ม
    const orderData = {
      products: data.products,
      user_id: data.user_id,
      total_price: data.total_price,
      address: data.address,
      tracker: null,
      createAt: currentDate,
      img: img,
      status: data.status,
    };
    console.log(orderData);
    // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้
    result = await addDoc(collection(db, collectionName), orderData);

    console.log("เพิ่มข้อมูลสำเร็จ", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล:", error);
  }

  return { result, error };
}
const deleteCartItem = async (cart_ids) => {
  let result = null;
  let error = null;

  try {
    // Loop through each cart_id in the array and delete the document
    await Promise.all(
      cart_ids.map(async (cart_id) => {
        const cartDocRef = doc(db, "cart", cart_id);
        await deleteDoc(cartDocRef);
      })
    );

    console.log("ลบข้อมูลสำเร็จ");
    result = true;
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
    result = false;
  }

  return { result, error };
};

export { deleteCartItem };

const deleteOrder = async (id) => {
  let result = null;
  let error = null;
  // อ้างอิงไปยังเอกสารที่ต้องการลบ
  const docRef = doc(db, "orders", id);

  try {
    // ลบเอกสาร
    await deleteDoc(docRef);

    console.log("ลบข้อมูลสำเร็จ");
    result = "Success";
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
  }

  return { result, error };
};
export { deleteOrder };

const editOrder = async (id, data) => {
  let result = null;
  let error = null;
  try {
    result = await setDoc(doc(db, "orders", id), data, {
      merge: true,
    });
    console.log("แก้ไขข้อมูลสำเร็จ");
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:", error);
  }

  return { result, error };
};

export { editOrder };

const confirmOrder = async (id) => {
  let result = null;
  let error = null;
  console.log("confirmOrder");
  try {
    const { result: orderResult, error: orderError } = await getDoument(
      "orders",
      id
    );
    if (orderError) {
      throw orderError;
    }
    const orderData = orderResult.data();
    // console.log(orderData)
    // ลูปเพื่ออัปเดตข้อมูลของสินค้า (product) ที่เกี่ยวข้องกับการซื้อ
    for (let i = 0; i < orderData.products.length; i++) {
      try {
        const { result: productResult, error: productError } = await getDoument(
          "products",
          orderData.products[i].product_id
        );
        if (productError) {
          console.error("Error fetching product document:", productError);
          continue;
        }
        const productData = productResult.data();

        const updatedProductSizes = productData.productSizes.map((size) => {
          if (size.size === orderData.products[i].size) {
            return {
              ...size,
              amount:
                parseInt(size.amount) - parseInt(orderData.products[i].amount),
            };
          } else {
            return size;
          }
        });
        // อัปเดตข้อมูลของสินค้า (product) ในฐานข้อมูล
        const updatedProductData = {
          productSizes: updatedProductSizes,
        };

        const { result: editResult, error: editError } = await editData(
          "products",
          orderData.products[i].product_id,
          updatedProductData
        );

        if (editError) {
          console.error("Error editing product:", editError);
        } else {
          console.log("Product edited successfully:", editResult);
        }
      } catch (error) {
        console.error("Error fetching product document:", error);
      }
    }

    const data = {
      status: "จัดเตรียมสินค้า",
    };
    result = await setDoc(doc(db, "orders", id), data, {
      merge: true,
    });
    console.log("แก้ไขข้อมูลสำเร็จ");
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:", error);
  }

  return { result, error };
};
export { confirmOrder };

const cancelOrder = async (id) => {
  let result = null;
  let error = null;

  console.log("confirmOrder");
  try {
    const { result: orderResult, error: orderError } = await getDoument(
      "orders",
      id
    );
    if (orderError) {
      throw orderError;
    }
    const orderData = orderResult.data();
    // console.log(orderData)
    // ลูปเพื่ออัปเดตข้อมูลของสินค้า (product) ที่เกี่ยวข้องกับการซื้อ
    for (let i = 0; i < orderData.products.length; i++) {
      try {
        // ค้นหาข้อมูลของสินค้า (product) ที่ต้องการแก้ไข
        console.log(
          "orderData.products[i].product_id",
          orderData.products[i].product_id
        );
        const { result: productResult, error: productError } = await getDoument(
          "products",
          orderData.products[i].product_id
        );
        if (productError) {
          console.error("Error fetching product document:", productError);
          continue;
        }
        const productData = productResult.data();
        // console.log(productData)
        // คำนวณค่า amount ใหม่โดยการลบค่า amount จาก buy และบวกค่า amount จาก buy ใหม่
        const updatedProductSizes = productData.productSizes.map((size) => {
          if (size.size === orderData.products[i].size) {
            return {
              ...size,
              amount:
                parseInt(size.amount) + parseInt(orderData.products[i].amount),
            };
          } else {
            return size;
          }
        });
        // อัปเดตข้อมูลของสินค้า (product) ในฐานข้อมูล
        const updatedProductData = {
          productSizes: updatedProductSizes,
        };

        const { result: editResult, error: editError } = await editData(
          "products",
          orderData.products[i].product_id,
          updatedProductData
        );

        if (editError) {
          console.error("Error editing product:", editError);
        } else {
          console.log("Product edited successfully:", editResult);
        }
      } catch (error) {
        console.error("Error fetching product document:", error);
      }
    }

    const data = {
      status: "ยกเลิก",
    };
    result = await setDoc(doc(db, "orders", id), data, {
      merge: true,
    });
    console.log("แก้ไขข้อมูลสำเร็จ");
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล:", error);
  }

  return { result, error };
};
export { cancelOrder };
