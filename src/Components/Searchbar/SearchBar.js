import React from "react";
import "./SearchBar.css";

const SearchBar = ({onInputChange,onClickChange}) => {
  return (
    <div className="center">
      <div >
        <div className="center">
          <p className='b text-color'>This Brain find different things from your entered video</p>
        </div>
        <div className='box'>
        <div className="center shadow-2 form ">
          <input
            type="text"
            className="f6 w-70 br2 ph3 pv2 mb2"
            placeholder="Enter the url/Video Link"
            onChange={onInputChange}
          />
          <button className="w-30 f6 link dim br2 ph3 pv2 mb2 dib white bg-purple grow button" onClick={onClickChange}>Find people</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
