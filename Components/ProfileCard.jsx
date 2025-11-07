import React from "react";
import "../src/index.css";

export default function ProfileCard() {

  const userdata = [
    {
      img: "../profile1.jpg",
      role: "General Dentist",
      name: "Dr. Emma Riley",
      desc: "Dedicated to gentle care and lasting results, she ensures every treatment is done with precision and patient comfort in mind."
    },
    {
      img: "../profile3.jpg",
      role: "General Dentist",
      name: "Dr. Mary Smith",
      desc: "Committed to healthy smiles, she blends experience with a soft touch to provide stress-free dental care for all ages."
    },
    {
      img: "../profile2.jpg",
      role: "Orthodontist",
      name: "Dr. Nick Carter",
      desc: "Expert in braces and aligners, he transforms smiles with modern orthodontic care as per patient’s need."
    },
    {
      img: "../section1_img.webp",
      role: "Endodontist",
      name: "Dr. May Dowson",
      desc: "Specialist in root canals, she focuses on saving natural teeth while offering pain-free treatments and compassionate care."
    },
    {
      img: "../profile4.jpg",
      role: "Pediatric Dentist",
      name: "Dr. Betty Nilson",
      desc: "Creates a fun and caring environment for kids, helping them build confidence and great dental habits from an early age."
    },
    {
      img: "../profile5.jpg",
      role: "Orthodontist",
      name: "Dr. Adrian Scold",
      desc: "Uses advanced tools & techniques to straighten teeth and improve bite alignment with personalized plans."
    }
  ]

  return (
    <>
      <div className="profileContainer">
        {userdata.map((profile, index) => (
          <div className="profileCard" key={index}>
            <div className="imgDiv">
              <img loading="lazy" src={profile.img} alt={profile.name} />
            </div>
            <div className="PInfo">
              <h4>{profile.role}</h4>
              <h2>{profile.name}</h2>
              <p>{profile.desc}</p>
              <div className="Plinks">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
