import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const RandomUserComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the function to fetch data
    fetchUserData();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {userData ? (
        <View>
          <Text>Name: {userData.name.first} {userData.name.last}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Phone: {userData.phone}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default RandomUserComponent;
