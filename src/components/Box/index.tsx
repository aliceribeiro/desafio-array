import React from "react";
import "./style.css";

type Props = {
  element: number;
};

export const Box = ({ element }: Props) => {
  return (
    <>
      {/* <div className="teste">🍕</div>
      <div className="teste">🍜</div>
      <div className="teste">🔙</div> */}

      <div className="output">
        <div className="teste">{element}</div>
      </div>
    </>
  );
};
