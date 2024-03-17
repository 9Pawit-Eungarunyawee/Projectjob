// calculateShippingRate.js

// สร้างฟังก์ชัน calculateShippingRate และทำการ export ออกมา
export default function calculateShippingRate(weight) {
    let shipRate = 0;
  
    if (weight <= 1) {
      shipRate = 20;
    } else if (weight <= 4) {
      shipRate = 40;
    } else if (weight <= 10) {
      shipRate = 100;
    } else if (weight <= 19) {
      shipRate = 190;
    } else {
      shipRate = 200;
    }
  
    return shipRate;
  }
  