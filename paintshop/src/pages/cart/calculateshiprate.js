import { getCollection } from "@/firebase/getData";
import { useEffect, useState } from "react";

export default function calculateShippingRate(weight) {
  const [shippingData, setShippingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shipRateCost, setShipRateCost] = useState([]);

  const fetchShippingData = async () => {
    const collectionName = "shipments";
    const { result, error } = await getCollection(collectionName);
    if (error) {
      console.error("Error fetching document:", error);
    } else if (result) {
      const data = result.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setShippingData(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShippingData();
  }, []);

  useEffect(() => {
    if (shippingData.length > 0) {
      const sortedData = shippingData.sort((a, b) => a.kg - b.kg);

      const closestItem = sortedData.find((item) => weight <= item.kg);

      if (closestItem) {
        setShipRateCost(closestItem.shippingCost);
      } else {
        setShipRateCost(400);
      }
    }
  }, [shippingData, weight]);

  return shipRateCost;
}
