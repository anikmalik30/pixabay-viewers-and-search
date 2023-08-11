import React, { useState } from "react";
import "./PicsItem.css";
import ImageDetail from "./ImageDetail";

const PicsItem = (props) => {
  const [isImageDetailOpen, setImageDetailOpen] = useState(false);

  const openImageDetail = () => {
    setImageDetailOpen(true);
  };

  const closeImageDetail = () => {
    setImageDetailOpen(false);
  };

  return (
    <div className="PicsItem__image">
      <img src={props.imageUrl} alt="Pixabay" onClick={openImageDetail} />
      {isImageDetailOpen && (
        <div className="image-detail-overlay">
          <ImageDetail imageUrl={props.imageUrl} onClose={closeImageDetail} />
        </div>
      )}
    </div>
  );
};

export default PicsItem;
