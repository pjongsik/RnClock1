
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

import { Button, TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Interval({navigation} : any): React.JSX.Element {
    
    return (
        <View style={styles.container}>
         <View style={styles.buttonArea} >
          <TouchableOpacity style={styles.button} onPress={() =>   navigation.navigate('Clock')}>
             <Text style={styles.buttonText}>버튼1</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() => console.log('버튼2이 눌렸습니다!')}>
             <Text style={styles.buttonText}>버튼2</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() => console.log('버튼3이 눌렸습니다!')}>
             <Text style={styles.buttonText}>버튼3</Text>
           </TouchableOpacity>
           </View>
         </View>
       );
    }  



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#ccc000',
    },
    timeText: {
      //fontSize: 80,
      fontWeight: 'bold',
      
    },
    buttonArea : {
      position: 'absolute', // 절대 위치 지정
      top: 20, // 위에서 20px 떨어진 위치
      left: 20, // 왼쪽에서 20px 떨어진 위치
      justifyContent: 'flex-start', // 세로 방향으로 위에서부터 시작
      alignItems: 'flex-start', // 가로 방향으로 왼쪽부터 시작
      //position: 'relative', // 부모 컨테이너가 절대 위치 지정을 위해 상대적으로 위치 지정
      backgroundColor: '#cccccc',
      flexDirection: 'row',
      width:500,
    },
    button: {
      //position: 'relative', // 절대 위치 지정
      // top: 20, // 위에서 20px 떨어진 위치
      // left: 20, // 왼쪽에서 20px 떨어진 위치
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginLeft: 10, // 버튼 간 간격 추가
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
    },
  });
  
  export default Interval;