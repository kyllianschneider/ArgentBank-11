import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Account from '../../components/Account/Account';
import accountData from '../../components/Account/accountData.json';
import EditUsername from '../../components/EditUsername/Editusername';
import { userError, userProfile } from '../../redux/reducer/userSlice';
import './user.css';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
    const fetchUserProfile = async () => {
      try {
        if (!token) {
          throw new Error('Token is missing');
        }
        
        const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        const { data } = response;
        if (data.status === 200) {
          console.log(data.body);
          dispatch(userProfile(data.body));
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        dispatch(userError(error.message || 'Error fetching user profile'));
      }
    };

    fetchUserProfile();
  }, [dispatch, token]);


  return (
    <main className="main bg-dark">
      <EditUsername />
      <h2 className="sr-only">Accounts</h2>
      {accountData.map((element) => <Account element={element} key={element.accountTitle} />)}
    </main>
  );
};

export default User;