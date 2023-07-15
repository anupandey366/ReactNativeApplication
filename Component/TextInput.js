import React,{useState} from "react";
import {Text,View,Button, StyleSheet, TextInput} from 'react-native';


const First = () => {

  const [name,setName] = useState("");
    return(
      <View>
        <Text style={InternalStyles.Textbox}>Name :{name} </Text>
        <TextInput 
          style={InternalStyles.Textbox}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text)=>{setName(text)}}
        />
        <Button backgroundColor="blue" title="Clear Text" onPress={()=>setName('')}/>
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
