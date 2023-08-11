import React, { useEffect, useState } from "react";
import PicsItem from "./PicsItem";

const Pics = ({ searchQuery }) => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    const fetchPics = async () => {
      try {
        const response = await fetch(`https://pixabay.com/api/?key=38754189-09783144f4e5c3b273c4a2fd5&q=${searchQuery}&image_type=photo&pretty=true`);
        const data = await response.json();
        setPics(data.hits);
      } catch (error) {
        console.error("Error fetching pics:", error);
      }
    };

    fetchPics();
  }, [searchQuery]);

  return (
    <div className="Pics">
      {pics.map(pic => (
        <PicsItem
          key={pic.id}
          title={pic.tags}
          imageUrl={pic.webformatURL}
        />
      ))}
    </div>
  );
};

export default Pics;
