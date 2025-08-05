import Link from 'next/link';
import React, { JSX } from 'react';
import {
  FaKey,
  FaLock,
  FaMapMarkedAlt,
  FaSignOutAlt,
  FaUndoAlt,
  FaUser,
} from 'react-icons/fa';
type MenuItem = {
  icon: JSX.Element;
  label: string;
};
type User = {
  avatarUrl: string;
  name: string;
  phone: string;
};
type ProfileProps = {
  user: User;
};
const Profile: React.FC<ProfileProps> = ({ user }) => {
  const menuItems = [
    {
      icon: <FaLock className="mr-2" />,
      label: 'Order History',
    },
    {
      icon: <FaUndoAlt className="mr-2" />,
      label: 'Return & Orders',
    },
    {
      icon: <FaUser className="mr-2" />,
      label: 'Account Info Settings',
    },
    {
      icon: <FaKey className="mr-2" />,
      label: 'Change Password',
    },
    {
      icon: <FaMapMarkedAlt className="mr-2" />,
      label: 'Address Book',
    },
    {
      icon: <FaSignOutAlt className="mr-2" />,
      label: 'Logout',
    },
  ];
  return (
    <div className="w-full">
      <div className="flex space-x-4 items-center border-b pb-3">
        <div>
          <img
            src={user.avatarUrl}
            alt="profile avatar"
            className="w-12 h12 rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.phone}</p>
        </div>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li className="mb-1 block" key={index}>
            <Link href={'/account'} className="flex items-center text-gray-700">
              {item.icon}
              <span className="ms-2">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
