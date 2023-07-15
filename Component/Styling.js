import React,{useState} from "react";
import {Text,View,Button, StyleSheet} from 'react-native';
import ExternalStyles from './style';

const First = () => {
    return(
      <View>
         <Text style={ExternalStyles.ExTextbox}>Name : jhfgughergherjhgburwehwgghbvgvheurghghfbvjhv </Text>
        <Text style={InternalStyles.Textbox}>Name : </Text>
      </View>
    );
};


export default First;

const InternalStyles = StyleSheet.create(
  {
    Textbox:{
      color:"white",
      backgroundColor:'blue',
      fontSize:30,
      padding:10,
      marginBottom:5,
      marginHorizontal:10,
      borderRadius:10,
      borderWidth:2,
      borderColor:'black',
      textAlign:'center',
      textAlignVertical:'center'
    }
  }
)
