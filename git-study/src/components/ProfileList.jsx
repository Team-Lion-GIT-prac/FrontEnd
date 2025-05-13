import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css';
import star from '../assets/shootingstar.jpg'
import lion from '../assets/babylion.jpg'

const profiles = [
  {
    name: '유진',
    bio: '개발만 못하는 개발자 입니다!.',
    image: lion,
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