import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css';
import star from '../assets/shootingstar.jpg'
import cloud from '../assets/cloud.jpg'
import lion from '../assets/babylion.jpg'
import dog from '../assets/멍멍.png'
import tomato from "../assets/토마토.jpg";

const profiles = [
    {
    name: "은우",
    bio: "멋쟁이 은우입니다!!!!!!!!!!",
    image: tomato,
  },
  {
    name: '서현',
    bio: '반갑습니다 ‧˚₊*̥(* ⁰̷̴͈꒳⁰̷̴͈ )‧˚₊*̥',
    image: cloud,
  },
  {
    name: '유진',
    bio: '개발만 못하는 개발자 입니다!.',
    image: lion,
  },
  {
    name: '윤서',
    bio: '안녕하세용 최윤서입니다.^^.',
    image: dog,

  },
  {
    name: '유성',
    bio: 'AI에 부쩍 관심이 생긴 개발자 입니다. :D',
    image: star,
  },
];

const ProfileList = () => {
  return (
    <div className="profile-list">
      {profiles.map((profile, idx) => (
        <ProfileCard key={idx} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
