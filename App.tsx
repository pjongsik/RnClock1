/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {getItem, setItem} from './src/common/storage';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Interval from './src/common/interval/inteval'
import Clock from './src/clock'
import ClockO from './src/clock_o'
import CampMain from './src/camping/campmain'

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  // const [loaded] = useFonts({
  //   Mono: require('./assets/fonts/MajorMonoDisplay-Regular.ttf'),
  // });
  const [time, setTime] = useState(new Date());
  const [fontSize, setFontSize] = useState(80); // 폰트 크기 상태 추가
  const [fontColor, setFontColor] = useState('#CCCCCC'); // 폰트 생상
  const [backColor, setBackColor] = useState('#ffffff'); // 바탕 색상

  useEffect(()=>{
    const inteval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return ()=>clearInterval(inteval)
  },[])


  useEffect(() => {
    const handleOrientationChange = (orientation: string) => {

      console.log('현재 화면 방향:', orientation);
      if (orientation === 'PORTRAIT') {
        setBackColor('#550055');
        setFontSize(150);
      } else {
        setFontSize(80);
      }
    };

    // 화면 방향 변경 이벤트를 감지하여 처리하는 이벤트 리스너 등록
    Orientation.addOrientationListener(handleOrientationChange);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => {
      Orientation.removeOrientationListener(handleOrientationChange);
    };

  }, []);


  return (

    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Clock" component={Clock} />
                <Stack.Screen name="Interval" component={Interval} />
                <Stack.Screen name="ClockO" component={ClockO} />
              <Stack.Screen name="CampMain" component={CampMain} />
            </Stack.Navigator>
            </NavigationContainer>



  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: '#f0f0f0',
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

export default App;
function useFonts(arg0: { Mono: any; }): [any] {
  throw new Error('Function not implemented.');
}

