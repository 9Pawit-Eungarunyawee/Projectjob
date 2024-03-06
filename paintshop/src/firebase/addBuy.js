import firebase_app from "./config";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  setDoc,
  doc,
  increment,
} from "firebase/firestore";
import editData from "./editData";
import getDoument from "./getData";
import { el } from "date-fns/locale";

const db = getFirestore(firebase_app);

export default async function addBuy(collectionName, data) {
  let result = null;
  let error = null;

  try {
    // เพิ่มข้อมูลเข้าคอลเลคชันตาม collectionName ด้วยข้อมูลที่เตรียมไว้
    const buyData = {
      name: data.name,
      createAt: Timestamp.fromDate(new Date(data.createAt)),
      // products: data.products.map((product) => ({
      //   ...product,
      //   product_exp: Timestamp.fromDate(new Date(product.product_exp)),
      // })),
      products: data.products,
      discount: data.discount !== "" ? data.discount : 0,
      shippingCost: data.shippingCost !== "" ? data.shippingCost : 0,
      user_id: data.user_id,
      totalCost: data.totalCost,
      status: "สำเร็จ",
    };

    result = await addDoc(collection(db, collectionName), buyData);
    console.log("สร้างรายการซื้อสำเร็จ", result);

    // อัปเดตข้อมูลสินค้า

    for (let i = 0; i < data.products.length; i++) {
      try {
        console.log(data.products[i].product_id);
        const { result: presult, error: perror } = await getDoument(
          "products",
          data.products[i].product_id
        );
        if (perror) {
          console.error("Error fetching document:", perror);
          continue;
        }
        if (presult) {
          const productData = presult.data();
          console.log("productData", i, productData);

          const updatedProductSizes = productData.productSizes.map((size) => {
            const matchingSize = data.products[i].product_size.find(
              (productSize) => productSize.size === size.size
            );
            if (matchingSize) {
              return {
                ...size,
                amount: size.amount
                  ? parseInt(size.amount) + parseInt(matchingSize.amount)
                  : parseInt(matchingSize.amount),
              };
            } else {
              return size;
            }
          });

          const updatedProductData = {
            productSizes: updatedProductSizes,
          };

          console.log("updatedProductData", updatedProductData);

          const { result: editResult, error: editError } = await editData(
            "products",
            data.products[i].product_id,
            updatedProductData
          );

          if (editError) {
            console.error("Error editing product:", editError);
          } else {
            console.log("Product edited successfully:", editResult);
          }
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    }
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการสร้างรายการซื้อ:", error);
  }

  return { result, error };
}

export async function editBuy(collection, id, data) {
  let result = null;
  let error = null;

  try {
    // ดึงข้อมูลของการซื้อ (buy) ที่ต้องการแก้ไข
    const { result: buyResult, error: buyError } = await getDoument(
      collection,
      id
    );
    if (buyError) {
      throw buyError;
    }
    const buyData = buyResult.data();

    // ลูปเพื่ออัปเดตข้อมูลของสินค้า (product) ที่เกี่ยวข้องกับการซื้อ
    for (let i = 0; i < buyData.products.length; i++) {
      try {
        // ค้นหาข้อมูลของสินค้า (product) ที่ต้องการแก้ไข
        const { result: productResult, error: productError } = await getDoument(
          "products",
          buyData.products[i].product_id
        );
        if (productError) {
          console.error("Error fetching product document:", productError);
          continue;
        }
        const productData = productResult.data();
        // คำนวณค่า amount ใหม่โดยการลบค่า amount จาก buy และบวกค่า amount จาก buy ใหม่
        const updatedProductSizes = productData.productSizes.map((size) => {
          const matchingSize = buyData.products[i].product_size.find(
            (productSize) => productSize.size === size.size
          );
          console.log("parseInt(matchingSize.amount)",matchingSize)
          if (matchingSize && matchingSize.amount !== undefined) {
            // คำนวณค่า newSizeAmount โดยการเพิ่มจำนวนสินค้าจาก data และลบออกจากจำนวนสินค้าที่มีอยู่เดิม
            const newSizeAmount = parseInt(size.amount) - parseInt(matchingSize.amount)
            return {
              ...size,
              amount: newSizeAmount,
            };
          } else {
            return size;
          }
        });

        // const updatedProductSizess = updatedProductSizes.map((size) => {
        //   const matchingSize = buyData.products[i].product_size.find(
        //     (productSize) => productSize.size === size.size
        //   );
        //   console.log("matchingSize data", i, matchingSize);
        //   if (matchingSize && matchingSize.amount !== undefined) {
        //     // คำนวณค่า newSizeAmount โดยการเพิ่มจำนวนสินค้าจาก data และลบออกจากจำนวนสินค้าที่มีอยู่เดิม
        //     const newSizeAmount =
        //       parseInt(size.amount) - parseInt(matchingSize.amount);
        //     console.log(newSizeAmount);
        //     return {
        //       ...size,
        //       amount: newSizeAmount,
        //     };
        //   } else {
        //     return size;
        //   }
        // });
        // อัปเดตข้อมูลของสินค้า (product) ในฐานข้อมูล
        const updatedProductData = {
          productSizes: updatedProductSizes,
        };

        const { result: editResult, error: editError } = await editData(
          "products",
          buyData.products[i].product_id,
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


    for (let i = 0; i < data.products.length; i++) {
      try {
        // ค้นหาข้อมูลของสินค้า (product) ที่ต้องการแก้ไข
        const { result: productResult, error: productError } = await getDoument(
          "products",
          data.products[i].product_id
        );
        if (productError) {
          console.error("Error fetching product document:", productError);
          continue;
        }
        const productData = productResult.data();
        // คำนวณค่า amount ใหม่โดยการลบค่า amount จาก buy และบวกค่า amount จาก buy ใหม่
        const updatedProductSizes = productData.productSizes.map((size) => {
          const matchingSize = data.products[i].product_size.find(
            (productSize) => productSize.size === size.size
          );
          console.log("parseInt(matchingSize.amount)", matchingSize);
          if (matchingSize && matchingSize.amount !== undefined) {
            // คำนวณค่า newSizeAmount โดยการเพิ่มจำนวนสินค้าจาก data และลบออกจากจำนวนสินค้าที่มีอยู่เดิม
            const newSizeAmount =
              parseInt(size.amount) + parseInt(matchingSize.amount);
            return {
              ...size,
              amount: newSizeAmount,
            };
          } else {
            return size;
          }
        });

        // const updatedProductSizess = updatedProductSizes.map((size) => {
        //   const matchingSize = buyData.products[i].product_size.find(
        //     (productSize) => productSize.size === size.size
        //   );
        //   console.log("matchingSize data", i, matchingSize);
        //   if (matchingSize && matchingSize.amount !== undefined) {
        //     // คำนวณค่า newSizeAmount โดยการเพิ่มจำนวนสินค้าจาก data และลบออกจากจำนวนสินค้าที่มีอยู่เดิม
        //     const newSizeAmount =
        //       parseInt(size.amount) - parseInt(matchingSize.amount);
        //     console.log(newSizeAmount);
        //     return {
        //       ...size,
        //       amount: newSizeAmount,
        //     };
        //   } else {
        //     return size;
        //   }
        // });
        // อัปเดตข้อมูลของสินค้า (product) ในฐานข้อมูล
        const updatedProductData = {
          productSizes: updatedProductSizes,
        };

        const { result: editResult, error: editError } = await editData(
          "products",
          data.products[i].product_id,
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

    // แก้ไขข้อมูลของเอกสารการซื้อ (buy)
    const updatedBuyData = {
      name: data.name,
      createAt: Timestamp.fromDate(new Date(data.createAt)),
      products: data.products,
      discount: data.discount !== "" ? data.discount : 0,
      shippingCost: data.shippingCost !== "" ? data.shippingCost : 0,
      user_id: data.user_id,
      totalCost: data.totalCost,
      status: data.status,
    };

    // แก้ไขข้อมูลเอกสารการซื้อ (buy)
    result = await setDoc(doc(db, collection, id), updatedBuyData, {
      merge: true,
    });
    console.log("แก้ไขข้อมูลเอกสารการซื้อสำเร็จ:", result);
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูลเอกสารการซื้อ:", error);
  }

  return { result, error };
}

export async function cancelBuy(colllection, id, data) {
  let result = null;
  let error = null;

  const buyData = {
    status: "ยกเลิก",
  };
  try {
    result = await setDoc(doc(db, colllection, id), buyData, {
      merge: true,
    });

    console.log("ยกเลิกรายการสำเร็จ", result);

    for (let i = 0; i < data.products.length; i++) {
      try {
        console.log(data.products[i].product_id);
        const { result: presult, error: perror } = await getDoument(
          "products",
          data.products[i].product_id
        );
        if (perror) {
          console.error("Error fetching document:", perror);
          continue;
        }
        if (presult) {
          const productData = presult.data();
          console.log("productData", i, productData);

          const updatedProductSizes = productData.productSizes.map((size) => {
            const matchingSize = data.products[i].product_size.find(
              (productSize) => productSize.size === size.size
            );
            if (matchingSize) {
              return {
                ...size,
                amount: size.amount
                  ? parseInt(size.amount) - parseInt(matchingSize.amount)
                  : parseInt(matchingSize.amount),
              };
            } else {
              return size;
            }
          });

          const updatedProductData = {
            productSizes: updatedProductSizes,
          };

          console.log("updatedProductData", updatedProductData);

          const { result: editResult, error: editError } = await editData(
            "products",
            data.products[i].product_id,
            updatedProductData
          );

          if (editError) {
            console.error("Error editing product:", editError);
          } else {
            console.log("Product edited successfully:", editResult);
          }
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    }
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการยกเลิกรายการข้อมูล:", error);
  }

  return { result, error };
}

export async function restoreBuy(colllection, id, data) {
  let result = null;
  let error = null;

  const buyData = {
    status: "สำเร็จ",
  };
  try {
    result = await setDoc(doc(db, colllection, id), buyData, {
      merge: true,
    });

    console.log("กู้คืนรายการสำเร็จ", result);

    for (let i = 0; i < data.products.length; i++) {
      try {
        console.log(data.products[i].product_id);
        const { result: presult, error: perror } = await getDoument(
          "products",
          data.products[i].product_id
        );
        if (perror) {
          console.error("Error fetching document:", perror);
          continue;
        }
        if (presult) {
          const productData = presult.data();
          console.log("productData", i, productData);

          const updatedProductSizes = productData.productSizes.map((size) => {
            const matchingSize = data.products[i].product_size.find(
              (productSize) => productSize.size === size.size
            );
            if (matchingSize) {
              return {
                ...size,
                amount: size.amount
                  ? parseInt(size.amount) + parseInt(matchingSize.amount)
                  : parseInt(matchingSize.amount),
              };
            } else {
              return size;
            }
          });

          const updatedProductData = {
            productSizes: updatedProductSizes,
          };

          console.log("updatedProductData", updatedProductData);

          const { result: editResult, error: editError } = await editData(
            "products",
            data.products[i].product_id,
            updatedProductData
          );

          if (editError) {
            console.error("Error editing product:", editError);
          } else {
            console.log("Product edited successfully:", editResult);
          }
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    }
  } catch (e) {
    error = e;
    console.error("เกิดข้อผิดพลาดในการกู้คืนรายการข้อมูล:", error);
  }

  return { result, error };
}
