import { useEffect,useState } from "react";
export default function Test(){
    const [catData, setCatData] = useState(null);
        // Fetch cat data from the Next.js API route
       
  useEffect(() => {
    async function fetchData() {
      try {
 // Replace with your actual API key
        const response = await fetch('https://api.api-ninjas.com/v1/cats?shedding=4&offset=5 ', {
          headers: {
            'X-Api-Key': "erDzKHY8fLx2SKFDbWa+3w==Sv2pL22KzSpMFU0x",
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setCatData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
      return (
        <div>
          <h1>Cat Information</h1>
          {catData ? (
            <pre>{JSON.stringify(catData, null, 2)}</pre>
          ) : (
            <p>Loading cat data...</p>
          )}
        </div>
      );
}