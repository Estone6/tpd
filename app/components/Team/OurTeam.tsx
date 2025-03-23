"use client";

import React from "react";
import SectionHeader from "../SectionHeader";
import Slider from "react-slick";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Member 1",
    image: "/images/team/1.jpg",
    designation: "Professional Event Planner",
    facebook: "https://www.facebook.com/john.doe",
    twitter: "https://www.twitter.com/john.doe",
    instagram: "https://www.instagram.com/john.doe",
    linkedin: "https://www.linkedin.com/in/john.doe",
  },
  {
    name: "Member 2",
    image: "/images/team/2.jpg",
    designation: "Planner/On-Site Coordinator",
    facebook: "https://www.facebook.com/jane.doe",
    twitter: "https://www.twitter.com/jane.doe",
    instagram: "https://www.instagram.com/jane.doe",
    linkedin: "https://www.linkedin.com/in/jane.doe",
  },
  {
    name: "Member 3",
    image: "/images/team/3.jpg",
    designation: "Associate Event Planner",
    facebook: "https://www.facebook.com/jane.doe",
    twitter: "https://www.twitter.com/jane.doe",
    instagram: "https://www.instagram.com/jane.doe",
    linkedin: "https://www.linkedin.com/in/jane.doe",
  },
  {
    name: "Member 4",
    image: "/images/team/4.jpg",
    designation: "Wedding & Event Photographer",
    facebook: "https://www.facebook.com/jane.doe",
    twitter: "https://www.twitter.com/jane.doe",
    instagram: "https://www.instagram.com/jane.doe",
    linkedin: "https://www.linkedin.com/in/jane.doe",
  },
];

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-pink px-7.5 py-12">
        <SectionHeader
          title="Creative Team"
          subTitle="associate"
        />
        <div className="team-slider">
          <Slider {...settings}>
            {teamMembers.map((member) => (
              <div key={member.name}>
                <TeamCard {...member} />
              </div>
            ))}
        </Slider>
        </div>
      </section>
      {/* Custom styles for Slick */}
      <style
        jsx
        global
      >{`
        .team-slider .slick-list {
          margin: 0 -8px;
        }
        .team-slider .slick-slide {
          padding: 0 8px;
        }
        .team-slider .slick-dots {
          bottom: -30px;
        }
        .team-slider .slick-dots li {
          width: 10px;
        }
        .team-slider .slick-dots li button:before {
          font-size: 12px;
        }
        .team-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
        .team-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default OurTeam;
