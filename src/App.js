import React, { useState } from "react";
// import styles from "./SevenContainersApp.module.scss";
import "./styles.scss";

export default function SevenContainersAPP() {
  const containerColors = [
    "AliceBlue",
    "AntiqueWhite",
    "BurlyWood",
    "Cornsilk",
    "DeepSkyBlue",
    "FloralWhite",
    "LightCyan",
  ];

  const [containerTexts, setContainerTexts] = useState([]);
  const [clickOrder, setClickOrder] = useState(0);

  const handleResetClick = () => {
    setContainerTexts([]);
    setClickOrder(0);
  };

  const handleContainerClick = (index) => {
    let tmpOrder = clickOrder;
    console.log(index);
    if (containerTexts.length === 0) {
      let tmpTexts = [];
      tmpTexts.length = 7;
      tmpTexts.fill("Please click me");
      tmpOrder++;
      tmpTexts[index] = "LaLa" + tmpOrder;
      setContainerTexts(tmpTexts);
    } else {
      if (containerTexts[index] === "Please click me") {
        tmpOrder++;
        let tmpTexts = [...containerTexts];
        tmpTexts[index] = "LaLa" + tmpOrder;
        setContainerTexts(tmpTexts);
      }
    }

    if (tmpOrder === 7) {
      setContainerTexts([]);
      setClickOrder(0);
    } else {
      setClickOrder(tmpOrder);
    }
  };

  return (
    <div className="App">
      <h1>Hello Seven Containers</h1>
      <h2>Click containers to see some magic happen!</h2>
      <button className="reset-btn" type="button" onClick={handleResetClick}>
        Reset
      </button>
      <div className="seven-containers-wrap">
        {containerColors.map((item, index) => {
          return (
            <div
              key={index}
              index={index}
              style={{ backgroundColor: item }}
              className="container"
              onClick={(event) => handleContainerClick(index)}
            >
              {containerTexts.length === 7 && containerTexts[index]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
