import React from 'react';
import Dashboard from '../assets/icons/dashboard.svg';
import Sales from '../assets/icons/sales.svg';
import Catalog from '../assets/icons/catalog.svg';
import Customers from '../assets/icons/customers.svg';
import Review from '../assets/icons/reviews.svg';

const icons = [Dashboard, Sales, Catalog, Customers, Review];

function ListItem(props) {
  return (
    <li className="section__item">
      <img src={props.icon} alt="Section Icon" className="section__icon" />
      {props.value}
    </li>
  );
}

export const SectionList = (props) => {
  const items = props.items;
  const listItems = items.map((sectionListItem, index) => (
    <ListItem
      key={sectionListItem}
      value={sectionListItem}
      icon={icons[index]}
    />
  ));
  return(
    <section className="section">
   <ul className="section__navigation">{listItems}</ul>
   </section>)
}
