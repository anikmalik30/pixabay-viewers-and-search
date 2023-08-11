import React from "react";
import "./ImageDetail.css";
import CloseIcon from '@mui/icons-material/Close';

const ImageDetail = ({ imageUrl, onClose }) => {
  return (
    <div className="image-detail">
      <img src={imageUrl} alt="Pixabay" />
      <div className="close-icon" onClick={onClose}>
        <CloseIcon fontSize="large" />
      </div>
    </div>
  );
};

export default ImageDetail;
