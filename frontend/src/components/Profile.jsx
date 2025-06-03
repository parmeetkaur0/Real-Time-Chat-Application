import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProfilePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  console.log(authUser);

  useEffect(() => {
    if (!authUser) {
      navigate('/login');
    }
  }, [authUser, navigate]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
       <button
                                  onClick={() => navigate(-1)}
                                  className=" flex items-center text-black justify-center h-10 w-[75px] border-gray-600 border-[1px]  rounded-[5px] text-sm font-medium "
                              >
                                  <svg
                                      className="mr-2 ml-2 text-[20px] transition-all duration-400 ease-in hover:text-[1.2em] hover:translate-x-[-5px]"
                                      height="16"
                                      width="16"
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="1.1"
                                      viewBox="0 0 1024 1024"
                                  >
                                      <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                                  </svg>
                                  <span >Back</span>
                              </button>
      
        <div className="flex flex-col items-center">
          <img
            src={authUser?.profilePhoto}
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">FullName: {authUser?.fullName}</h2>
          <p className="text-gray-700  mt-2">Username: {authUser?.username}</p>
          <p className="text-gray-700 capitalize">Gender: {authUser?.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
