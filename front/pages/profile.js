import AppLayout from '../components/AppLayout';
import React from 'react';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const profile = () => {
  const followerList = [
    { nickname: '제로초' },
    { nickname: '태균' },
    { nickname: '세균맨' },
  ];
  const followingList = [
    { nickname: '제로초' },
    { nickname: '태균' },
    { nickname: '세균맨' },
  ];
  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로워 목록" data={followerList} />
    </AppLayout>
  );
};

export default profile;
