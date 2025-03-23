"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface TeamMember {
  name: string;
  image: string;
  designation: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

const TeamCard: React.FC<TeamMember> = ({ name, image, designation, facebook, twitter, instagram, linkedin }) => {
  return (
    <div className="relative overflow-hidden group text-center h-full">
      <div className="relative overflow-hidden h-96">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-[10%_50%] transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
        />
      </div>
      <div className="team-card-content">
        <h3 className="team-card-name">{name}</h3>
        <p className="team-card-designation">{designation}</p>
        <div className="team-card-social">
          {facebook && <Link href={facebook}><FaFacebook /></Link>}
          {twitter && <Link href={twitter}><FaTwitter /></Link>}
          {instagram && <Link href={instagram}><FaInstagram /></Link>}
          {linkedin && <Link href={linkedin}><FaLinkedin /></Link>}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

