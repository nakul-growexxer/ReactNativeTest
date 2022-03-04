import React from "react";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'#3a3b3c',
  },
  regform:{
    alignSelf:'stretch',
  },
  heading:{
    fontSize:28,
    color:'#FFFFFF',
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1,
  },
  textinput:{
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    color:"#FFF",
    borderBottomColor: '#F8F8F8',
    borderBottomWidth:1,
  },
  button:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:20,
    backgroundColor:'#59cbbd',
    marginTop: 30, 
  },
  btntext:{
    color:'#FFFFFF',
    fontWeight:'bold',
  },
  text:{
    fontSize: 40,
    color:"#FFFFFF",
  },
});