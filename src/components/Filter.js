import React from "react";

const Filter = ({value, onChange}) => {
  return(
    <>
    <h1 className="filterh1">Contacts</h1>
    <p className="filterp">Find contact by name</p>
    <input type="text" className="filter-finder" value={value} onChange={onChange}></input>
    </>
  )
};

export default Filter;