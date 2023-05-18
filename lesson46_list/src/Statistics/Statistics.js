import React from "react";
import DollarIcon from "../assets/icons/dollar.svg";
import ShoppingCartIcon from "../assets/icons/shopping-cart.svg";
import NewCustomerIcon from "../assets/icons/newcustomer.svg";
import ReviewIcon from "../assets/icons/review.svg";
import { useState } from "react";

const icons = [DollarIcon, ShoppingCartIcon, ReviewIcon, NewCustomerIcon];

const DEFFAULT_INFO = [
  {
    title: "Monthly Revenue",
    subtitle: "1 385 $USD",
  },
  {
    title: "New Orders",
    subtitle: 12,
  },
  {
    title: "Pending Reviews",
    subtitle: 3,
  },
  {
    title: "New Customers",
    subtitle: 9,
  },
];

function CreateStatistics(props) {
  const { title, subtitle, icon } = props;
  return (
    <div className="statistics__item">
      <div className="statistics__logo">
        <img src={icon} alt="Statistic Icon" className="statistics__icon" />
      </div>
      <div className="statistics__info">
        <h3 className="statistics__title" title={title}>
          {title}
        </h3>
        <h4 className="statistics__subtitle">{subtitle}</h4>
      </div>
    </div>
  );
}

export const Statistics = () => {
  const [info] = useState(DEFFAULT_INFO);
  return (
    <div className="statistics">
      <div className="statistics__items">
        {info.map((data, index) => (
          <CreateStatistics
            key={index}
            title={data.title}
            subtitle={data.subtitle}
            icon={icons[index]}
          />
        ))}
      </div>
    </div>
  );
};
