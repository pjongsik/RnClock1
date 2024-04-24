import React from 'react';
import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,

} from 'react-native';

import Orientation from 'react-native-orientation-locker'; // 패키지 import

import { Button, TextInput } from 'react-native-paper';



function ClockO({navigation} : any): React.JSX.Element {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date( new Date().getTime() + (9 * 60 * 60 * 1000)));
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    const formatTime = (time : any) => {
      return time < 10 ? `0${time}` : time;
    };

    const hours = formatTime(time.getHours());
    const minutes = formatTime(time.getMinutes());
    const seconds = formatTime(time.getSeconds());


    const secondsDegrees = ((time.getSeconds() / 60) * 360) + 90;
    const minutesDegrees = ((time.getMinutes() / 60) * 360) + 90;
    const hoursDegrees = (((time.getHours() - 12)/ 12) * 360) + 90 + (minutesDegrees / 90);


    return (
        <View style={styles.container}>
          <View style={styles.clock}>
          {[...Array(12)].map((_, index) => (
          <Text
            key={index}
            style={[
              styles.number,
              { transform: [{ rotate: `${(index * 30) + 30}deg` }, {translateY : -100}] },
              (index + 1) % 3 === 0 ? styles.largeNumber : null,
            ]}
          >
            {index + 1}
          </Text>
        ))}
            {/*<Text style={[styles.number, styles.seconds, { transform: [{ rotate: `${seconds * 6}deg`}] }]}>•초</Text>*/}
            {/*<Text style={[styles.number, styles.minutes, {transform: [{ rotate: `${minutes * 6}deg` }] }]}>•분</Text>*/}
            {/*<Text style={[styles.number, styles.hours, {transform: [{ rotate: `${hours * 30}deg` }] }]}>•시</Text>*/}


            <Text style={[styles.number, styles.time]}> {time.toLocaleTimeString('en-US', {'hour12' : false })}</Text>
            <Text style={[styles.number, styles.seconds]}>{secondsDegrees} / {minutesDegrees} / {hoursDegrees} </Text>
          </View>

          <View style={[styles.hand, styles.secondHand, {transform: [{ rotate: `${secondsDegrees}deg` }, {translateX: -32}]}]} />
          <View style={[styles.hand, styles.minuteHand, {transform: [{ rotate: `${minutesDegrees}deg` }, {translateX: -28}]}]} />
          <View style={[styles.hand, styles.hourHand, {transform: [{ rotate: `${hoursDegrees}deg` }, {translateX: -18}]}]} />

        </View>



      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clock: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  number: {
    position: 'absolute',
    fontSize: 14,
  },
  largeNumber: {
    fontSize: 20,
  },
  seconds: {
    top: 10,


  },
  minutes: {
    top: 20,
  },
  hours: {
    top: 30,
  },
  time: {
    top: 130,
  },

  clockContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hand: {
    position: 'absolute',
    backgroundColor: 'black',
    height: 1,
  },
  secondHand: {
    width: '28%',
  },
  minuteHand: {
    width: '25%',
  },
  hourHand: {
    width: '20%',
  },
});

export default ClockO;
