import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css';
import star from '../assets/shootingstar.jpg';
import cat from '../assets/bongbong.jpg';

const profiles = [
  {
    name: '채윤',
    bio: '흠.',
    image: cat,

import star from '../assets/shootingstar.jpg'
import dog from '../assets/멍멍.png'


const profiles = [
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
