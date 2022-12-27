import React from "react";
// import ClassComponent from "../pages/Components/ClassComponent"

const BaseHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <h1>This is my Navbar</h1>
        <Component {...props} />
        <h1>This is my Footer</h1>
      </div>
    );
  };

export default BaseHoc;
