import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/userSlice';
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';

const Sidebar = () => {
    const [search, setSearch] = useState("");
    const { otherUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));
        } catch (error) {
            console.log(error);
        }
    }

    const ProfileHandler = () => {
        navigate("/profile");
    }

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser) {
            dispatch(setOtherUsers([conversationUser]));
        } else {
            toast.error("User not found!");
        }
    }
    return (
        <div className='border-r border-slate-500 p-4 w-full flex flex-col'>
            <form onSubmit={searchSubmitHandler} action="" className='flex w-full items-center gap-2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='input input-bordered rounded-md' type="text"
                    placeholder='Search...'
                />
                <button type='submit' className='btn bg-zinc-700 text-white'>
                    <BiSearchAlt2 className='w-6 h-6 outline-none' />
                </button>
            </form>
            <div className="divider px-3"></div>
            <OtherUsers />
            <div className="divider bottom-10  px-2">
                <div className='mt-2'>
                    <button onClick={logoutHandler} className="text-white cursor-pointer border border-black rounded-full px-5 py-2 bg-black transition duration-200 hover:bg-white hover:text-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_5px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
                        Logout
                    </button>
                </div>
                <div className='mt-2'>
                    <button onClick={ProfileHandler} className="text-white cursor-pointer border border-black rounded-full px-6 py-2 bg-black transition duration-200 hover:bg-white hover:text-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_5px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none">
                        Profile
                    </button>


                </div>
            </div>

        </div>
    )
}

export default Sidebar