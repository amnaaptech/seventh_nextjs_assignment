
"use client";
import { useState, useEffect } from "react";
// import Navbar from "../../component/navbar";
import Image from "next/image";

interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ClientFetch = () => {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const parsedResponse: Data[] = await response.json();
        console.log("data >>>", parsedResponse);
        setData(parsedResponse);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg shadow-lg p-4 flex flex-col items-center transform transition-transform duration-200 hover:scale-100 hover:shadow-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="mb-4 rounded"
                />
                <h2 className="text-lg font-semibold mb-2 text-center">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-700 mb-4 text-center">
                  {item.description.slice(0, 100)}...
                </p>
                <p className="text-base font-medium text-green-600 mb-2">
                  Price: ${item.price}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Category: {item.category}
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ClientFetch;
