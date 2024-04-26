import React from 'react';
import {useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    Button,
    TextInput,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    TouchableOpacity,

} from 'react-native';
import axios from 'axios';

function CampMain({navigation} : any): React.JSX.Element {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("initText");


   // const url = "https://gwgs.pubcamping.kr/@song/productSelectJson.do?stay_cnt=1&check_in=20240511&check_out=20240512&room_area_no=1";


    useEffect(() => {
        callCamp();
        // axios({
        //     method: 'post',
        //     url: url,
        // }).then((response) => {
        //     console.log(response);
        // }).catch((errer) => console.log(errer));

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         //Accept: "application/json",
        //         'Content-Type': 'application/json',
        //         'Host': 'gwgs.pubcamping.kr',
        //         'Cookie': 'JSESSIONID=BD7E11AB826A12C25BCC7BCA0CADEEE4.worker2; SERVERID=server-gwgs-camp-00',
        //     },
        //     // body: JSON.stringify({
        //     //     stay_cnt: 1,
        //     //     check_in: "20240511",
        //     //     check_out: "20240512",
        //     //     room_area_no: "1",
        //     // }),
        // })
        //     .then((resp) => resp.json())
        //     .then((json) => {
        //             setData(json)
        //             console.log(json)
        //         }
        //     )
        //     .catch((error) => console.error(error))
        //     .finally(() => setLoading(false));
    }, []);

    const onSubmitFormHandler = async (event) => {
        //if (!fullName.trim() || !email.trim()) {
        console.log("Name or Email is invalid");
        return;
        //}
    }

    const callCamp = () => {
        const url = "https://gwgs.pubcamping.kr/@song/productSelectJson.do?stay_cnt=1&check_in=20240511&check_out=20240512&room_area_no=1";


        axios({
            mothed : 'post',
            url : url,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Host": "gwgs.pubcamping.kr",
                "Connection" : "keep-alive",
            },

            })
            .then((response) => {console.log(response);
                setText(response.toString());
               // setData(response.json());
            })
            .catch((error) => { console.log(error);
                setText(text +'\n'+ error.toString());
            });
    }




    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <View>
                    <Text style={styles.text}>camp1</Text>
                    <Text style={styles.text}>do it</Text>
                </View>
                <View>
                    <Text style={styles.text}>camp2</Text>
                    <Text style={styles.text}>{text}</Text>
                    <TextInput
                        placeholder="input text here!"
                        placeholderTextColor="#000000"
                        style={[styles.input, styles.text]}
                        value={''}
                        editable={!loading}
                        onChangeText={onSubmitFormHandler}
                    />
                </View>
                <View>

                    <Button title={"call"} onPress={() =>
                        callCamp()
                    }></Button>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor : '#cccccc',
    },
    text: {
        color:'#000000',
    }
});

export default CampMain;
