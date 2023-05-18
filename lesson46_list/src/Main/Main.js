import React from "react";
import "./Main.scss";
import { SectionList } from "../SectionList/SectionList";
import { Statistics } from "../Statistics/Statistics";
import { Feedback, News, Users } from "../Users/Users";

const items = ["Dashboard", "Sales", "Catalog", "Customers", "Review"];

export const Main = () => {
  return (
    <main className="main">
      <div className="main__wrapper">
          <SectionList items={items} />
        <section className="add__info">   
            <Statistics />
            <div className="users">
            <News />
            <Feedback />
            <Users />
            </div>
        </section>
      </div>
    </main>
  );
};