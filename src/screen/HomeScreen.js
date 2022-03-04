import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import styles from "./Style/style";

const HomeScreen = ({navigation,route}) => {


  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={()=>{navigation.navigate('RegForm')}}
      >
        <Text style={styles.btntext}>
          Register here  
        </Text>
      </TouchableOpacity>
      <Text>Name : {route?.params?.name} </Text>
      <Text>email : {route?.params?.email} </Text>
      <Text>phoneNum : {route?.params?.phoneNum} </Text>
      <Text>address : {route?.params?.address} </Text>
      <Text>password : {route?.params?.password} </Text>

      <TouchableOpacity style={styles.button}
        onPress={()=>{navigation.navigate('count')}}
      >
        <Text style={styles.btntext}>
          Counter here  
        </Text>
      </TouchableOpacity>

    </View>
  );
}

export default HomeScreen;