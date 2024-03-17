// calculateShippingRate.js

// สร้างฟังก์ชัน calculateShippingRate และทำการ export ออกมา
export default function calculateShippingRate(weight) {
    let shipRate = 0;
  
    if (weight <= 1) {
      shipRate = 67;
    } else if (weight <= 4) {
      shipRate = 120;
    } else if (weight <= 10) {
      shipRate = 220;
    } else if (weight <= 19) {
      shipRate = 310;
    } else {
      shipRate = 400;
    }
  
    return shipRate;
  }
  