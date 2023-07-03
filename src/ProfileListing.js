import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './profileListing.css';

const ProfileListing = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://express-t4.onrender.com/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const fullName =user.name
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="list-container">
      <h2>Profile Listing</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearch}
        className="search"
      />
  
      <div className="profile-container">
        {filteredUsers.map((user) => (
          <div key={user._id} className="user-container">
            <img src={user.picture} alt="User" />
            <h3>{`${user.name}`}</h3>
            <Link to={`/profile/${user._id}`}>View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default ProfileListing;
