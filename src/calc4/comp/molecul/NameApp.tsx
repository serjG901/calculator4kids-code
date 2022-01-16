import React from "react";
import PaintWord from "./PaintWord";

const NameApp = () => {
  return (
    <div>
      Calculator 4 <PaintWord>kids</PaintWord>
    </div>
  );
};

export default React.memo(NameApp);
