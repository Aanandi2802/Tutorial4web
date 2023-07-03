import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './profileDetail.css';

const ProfileDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUser();
  }, [id]);
  
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="user-detail-container">
        <h2>Profile Detail</h2>
        <img src={user.picture} alt="User" className="user-image" />
        <h3>{`${user.name}`}</h3>
        <p>Email: {user.email}</p>
        <p>Address: {user.address}</p>
      </div>
    </div>
  );
};

export default ProfileDetail;
