import React from "react";
import './Face.css';

const Face = ({ imageurl,box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="input image"
          src={imageurl}
          alt=""
          width="400px"
          height="auto"
        />
        <div className='face-border' style= {{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></div>
      </div>
    </div>
  );
};

export default Face;
