import React from 'react';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { authUser, selectedUser } = useSelector(store => store.user);

  return (
    <div className="flex h-[600px] w-full md:w-auto md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {/* For medium and up screens: show both */}
      <div className="hidden md:flex w-full">
        <Sidebar />
        <MessageContainer />
      </div>

      {/* For small screens: conditionally show one at a time */}
      <div className='flex md:hidden w-full'>
  {!selectedUser ? <Sidebar /> : <MessageContainer className="flex-1" />}
</div>
    </div>
  );
};

export default HomePage;
