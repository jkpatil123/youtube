import React from "react";
import Button from "./Button";

const List = ["All", "Live", "Songs", "Cricket", "Live", "Football", "Comedy"];

const ButtonList = () => {
  return (
    <div className="flex">
      {List.map((value) => {
        return <Button name={value} />;
      })}
    </div>
  );
};

export default ButtonList;
