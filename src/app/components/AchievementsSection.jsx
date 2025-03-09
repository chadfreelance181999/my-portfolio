"use client";
import React, { useEffect, useState } from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: 20,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 100000,
  },
  {
    metric: "Company Awards",
    value: 2,
  },
  {
    metric: "Years Experience",
    value: 4,
  },
];

const Counter = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Duration in ms
    const increment = targetValue / (duration / 16); // 16ms per frame

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        clearInterval(timer);
        setCount(targetValue);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue]);

  return <>{count.toLocaleString()}</>;
};

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-0">
      <div className="sm:dark:border-[#33353F] border-secondary-400 sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="dark:text-white text-4xl font-bold flex items-center">
              {achievement.prefix || ""}
              <span className="dark:text-white text-4xl font-bold">
                <Counter targetValue={achievement.value} />
              </span>
              {achievement.postfix || ""}
            </h2>
            <p className="dark:text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
