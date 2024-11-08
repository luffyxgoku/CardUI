import React from "react";
import pic3 from "../assets/pic3.jpg";
import pic2 from "../assets/pic2.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";

export default function Card({ searchQuery }) {
  const cardDatas = [
    {
      name: "Johnson Wood",
      designation: "Front End Developer",
      email: "johnsonwood@microsoft.com",
      profile_pic: pic2,
    },
    {
      name: "John Doe",
      designation: "Team Lead",
      email: "johndoe@microsoft.com",
      profile_pic: pic3,
    },
    {
      name: "Fakhar Naveed",
      designation: "UI/UX Designer",
      email: "fakhar@microsoft.com",
      profile_pic: pic4,
    },
    {
      name: "Alex Made",
      designation: "Software Engineer",
      email: "alexmade@microsoft.com",
      profile_pic: pic5,
    },
    {
      name: "Johnson Wood",
      designation: "Back End Developer",
      email: "johnsonwood1@microsoft.com",
      profile_pic: pic6,
    },
    {
      name: "John Doe",
      designation: "Team Lead",
      email: "johndoe1@microsoft.com",
      profile_pic: pic7,
    },
  ];

  const filteredCards = cardDatas.filter((data) =>
    data.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="list-card-container">
        {filteredCards.map((data) => (
          <div className="card-container" key={data.email}>
            <img
              src={data.profile_pic}
              alt="profile-pic"
              className="profile-pic"
            />
            <div className="name-designation-container">
              <label className="name">{data.name}</label>
              <label className="designation">{data.designation}</label>
            </div>
            <div className="email-container">
              <label className="email-text">Email</label>
              <label>{data.email}</label>
            </div>
            <div className="buttons-container">
              <button className="card-button block">Block</button>
              <button className="card-button details">Details</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
