import React, { useState } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0); //selectedTab index passed for Trending 0 means day
  const [left, setLeft] = useState(0); //To change background animation

  const activeTab = (tab, index) => {
    setLeft(index * 100); //0*100=0 for 0 index ,  1*100=100 for 1 index
    setTimeout(() => {
      setSelectedTab(index);
    }, 300); //to run animation smooth and then update value

    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
