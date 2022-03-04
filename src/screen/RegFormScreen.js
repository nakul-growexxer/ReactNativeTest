import React, {useState}from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import styles from './Style/style';




const RegFormScreen = ({navigation}) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNum,setPhoneNum] = useState('');
  const [address,setAddress] = useState('');
  const [password,setPassword] = useState('');



  const handleUpdate = () => {
    console.log(name);
    console.log(email);
    console.log(phoneNum);
    console.log(address);
    console.log(password);

   
    if (!email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      console.warn('enter  valid email');
    }
    else if(!phoneNum && !/^[0-9]{10}$/.test(phoneNum)){
      console.warn('Invalid Phone Number');
    }
    else if(!password && "^(?=.*[A-Za-z])(?=.*\d){8,}$"){
      console.warn('Invalid password');
    }    
    else if(name && email && phoneNum && address && password){
    navigation.navigate('Home',
      { name:name,email:email,
        phoneNum:phoneNum,address:address,
        password:password 
      });
    }
    
  }
 

  return(
  <View style={styles.container}>
    <Text style={styles.heading}>Testing</Text>
    <TextInput style={styles.textinput} 
      placeholder="NAME" 
      value={name}
      onChangeText={(e) => setName(e)} 
    />
    <TextInput style={styles.textinput} 
      placeholder="EMAIL"
      value={email}
      onChangeText={(e) => setEmail(e)} 
    />
    <TextInput style={styles.textinput} 
      placeholder="PHONE NUMBER" 
      value={phoneNum}
      onChangeText={(e) => setPhoneNum(e)}  
    />
    <TextInput style={styles.textinput} 
      placeholder="ADDRESS" 
      value={address}
      onChangeText={(e) => setAddress(e)}  
    />
    <TextInput style={styles.textinput} 
      placeholder="PASSWORD" 
      secureTextEntry={true} 
      value={password}
      onChangeText={(e) => setPassword(e)} 
    />


    <TouchableOpacity style={styles.button} 
    onPress={() => {handleUpdate()}}>
      <Text style={styles.btntext}>
        Register yourself 
      </Text>
    </TouchableOpacity>



  </View>);
}

export default RegFormScreen;