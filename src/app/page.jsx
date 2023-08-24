"use client";
import { MailIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import ProfileList from "./components/profileList";

export default function Example() {
  const [selectedCat, setSelectedCat] = useState([]);
  const [catData, setCatData] = useState([]); // Initialize cat data as an empty array

  // Fetch cat data from your API when the component mounts
  useEffect(() => {
    async function fetchCatData() {
      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/cats?shedding=4",
          {
            headers: {
              "X-Api-Key": "erDzKHY8fLx2SKFDbWa+3w==Sv2pL22KzSpMFU0x", // Replace with your actual API key
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCatData(data);
        setSelectedCat(data[0]); // Set the selected cat to the first cat in the data
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    }

    fetchCatData();
  }, []);

  // Handle clicking on a cat
  const handleCatClick = (cat) => {
    setSelectedCat(cat);
  };
   console.log(catData);
  
   return(
  
    <ProfileList
    selectedCat={selectedCat}
    catData={catData}
    handleCatClick={handleCatClick}
  />
   );
}
