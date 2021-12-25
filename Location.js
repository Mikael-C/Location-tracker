import React, { useState, useEffect } from 'react';

import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import firebase from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';




  

export default function Location() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  
    
    function Position (){
      
     
    useEffect(() => {
      let subscriber;
    
      const startWatching = async () => {
       try {
        const { status } = await requestPermissionsAsync();
        const subscriber = await watchPositionAsync(
         {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
         },
         callback
        );
    
        if (status !== 'granted') {
         throw new Error('Location permission not granted');
        }
        else{
          const watchId = navigator.geolocation.watchPosition(
            ({ coords : {latitude, longitude} }) => this.setState({latitude, longitude}, () => console.log('State:', this.state)),
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 0, maximumAge: 1000, distanceFilter: 1},
          );
          await AsyncStorage.setItem('LiveFeedId', JSON.stringify(watchId));
        }
       } catch (err) {
        setError(err);
       }
      };

      let shouldTrack;
    
      if (shouldTrack) {
       startWatching();
      } else {
       subscriber?.remove();
       subscriber = null;
      }
    
      return () => {
       if (subscriber) {
        subscriber.remove();
       }
       firebase.database().ref('location/').update({
        latitude: latitude,
        longitude: longitude,
     });
   


      };

      

    
  


     }, []);
    }

     



// function storeUserLocation(userId, location) {
//   const db = getDatabase();
//   const reference = ref(db, 'location/' + userId);
//   set(reference, {
//     userLocation: location,
//   });
// }
// function setupLocationListener(userId) {
//   const db = getDatabase();
//   const reference = ref(db, 'location/' + userId);
//   onValue(reference, (snapshot) => {
//     const location = snapshot.val().location;
//     console.log("New Location: " + location);
//   });
// }


     return(
      <View style={StyleSheet}> 
        <Text>
          {JSON.stringify(location)}
        </Text>
      </View>
    );

    }


    
     
   
   

  

  

  