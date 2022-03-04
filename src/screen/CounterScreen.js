import React,{useState} from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';
import style from './Style/style';

const CounterScreen = () => {
  // let flag = 0;
  const [flag, setFlag] = useState(0);
  return(
    <View style={style.container}>
      <Button title='add' onPress={() => {
        //flag++;
        setFlag(flag + 1);
        console.log(flag);
        }}
      />
      <Text style={style.text}>
        Current Count : {flag} 
      </Text>
      <Button title='subtract' onPress={() => {
        //flag--;
        if(flag>0){ 
        setFlag(flag - 1);

        console.log(flag);
      }
        }}
      />
    </View>
  );
};



export default CounterScreen;