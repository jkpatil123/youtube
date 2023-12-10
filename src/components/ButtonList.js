import React from "react";
import Button from "./Button";

const List = ["All", "Live", "Songs", "Cricket", "Live", "Football", "Comedy"];

const ButtonList = () => {
  return (
    <div className="flex">
      {List.map((value,index) => {
        return<div key={index}> <Button name={value} /> </div>;
      })}
    </div>
  );
};

export default ButtonList;
