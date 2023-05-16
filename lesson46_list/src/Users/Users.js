import React from "react";
import NewsImage from '../assets/images/ceo.jpg'
import FirsImg from '../assets/images/alice.png'
import SecondImg from '../assets/images/alja-brun.png';
import ThirdImg from '../assets/images/dominic.png';
import FirstUser from '../assets/images/user-1.jpg';
import SecondUser from '../assets/images/user-2.jpg';
import ThirdUser from '../assets/images/user-3.jpg';
import ForthUser from '../assets/images/user-4.jpg';
import { useState } from "react";


export const News = () => {
  return (
    <div className="news">
      <img src={NewsImage} alt="News" className="news__img"></img>
      <div className="news__text-wrapper">
      <h2 className="news__title">Welcome to react-admin demo</h2>
      <p className="news__text">
        This is admin of an imaginary poster shop. Feel free to explore and
        modify the data - it's local to your computer, and will reset each time
        you reload.
      </p>
      </div>
    </div>
  );
};


const images = [FirsImg, SecondImg, ThirdImg];
const DEFAULT_TEXT = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  'Duis aute irure dolor in reprehenderit in voluptate...',
  'Excepteur sint occaecat cupidatat non proident, sunt...'
];

function CreateFeedback(props) {
  const { text, image } = props;
  return (
    <div className="feedback__item">
      <img src={image} alt="User" className="feedback__image" />
      <p className="feedback__text">{text}</p>
    </div>
  );
}

export const Feedback = () => {
  const [text] = useState(DEFAULT_TEXT);
  return (
    <div className="feedback">
      <div className="feedback__wrapper">
        {text.map((data, index) => (
          <CreateFeedback 
            key={index}
            image={images[index]}
            text={data}
          />
        ))}
      </div>
    </div>
  );
};


const users = [FirsImg, SecondImg, ThirdImg, FirstUser, SecondUser, ThirdUser, ForthUser];
const DEFFAULT_NICKNAMES = ['Cedric Kirin', 'Alessandra Simonis', 'Lemps Gorczany' , 'Loma Quigley', 'Donell Nienow', 'Ross Lockman'];

function CreateUsers(props) {
  const {image, text} = props;

  return (
    <div className="user__item">
      <img src={image} className="user__img" alt="User"></img>
      <p className="user__text">{text}</p>
    </div>
  )
}

export const Users = () => {
  const [text] = useState(DEFFAULT_NICKNAMES);

  return (
    <div className="user">
      <div className="user__wrapper">
        {text.map((data, index) => (
          <CreateUsers 
          key={index}
          image={users[index]}
          text={data}
          />
        )
        )}
      </div>
    </div>
  )
}