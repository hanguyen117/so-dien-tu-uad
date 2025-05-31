import React from 'react';
import { Link } from 'react-router-dom';

const UserDropdown = () => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button className="user-icon">👤</button>
      </div>
      <div className="origin-top-right absolute mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
            Đăng nhập
          </Link>
          {/* <button className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Đăng xuất
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
