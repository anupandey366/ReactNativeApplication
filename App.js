import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
 

const First = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [showPassword, setshowPassword] = useState(true);
  const [securePassword, setsecurePassword] = useState(false);


  return (
    <View>
      <Text style={InternalStyles.Textbox}>Name :{name} </Text>
      <TextInput
        style={InternalStyles.etStyle}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => { setName(text) }}
      />
      <Text style={InternalStyles.Textbox}>Email :{email} </Text>
      <TextInput
        style={InternalStyles.etStyle}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => { setEmail(text) }}
      />
      <Text style={InternalStyles.Textbox}>Password :{password} </Text>
      <TextInput
        style={InternalStyles.etStyle}
        placeholder="Enter your password"
        value={password}
        secureTextEntry= {setsecurePassword}
        onChangeText={(text) => { setPassword(text) }}
      />
      <Button backgroundColor="blue" title="Clear Text"
        onPress={() => {
          setDisplay(false)
            setName(''),
            setEmail(''),
            setPassword('')
        }
        } />

      <Button backgroundColor="blue" title="Show Password"
        onPress={() => {

          setsecurePassword(false);

          // if(setshowPassword)
          // {
          //   setsecurePassword(false)
          // }
          // else
          // {
          //   setsecurePassword(true)
          // }

        }
        } />

      
      <Button backgroundColor="blue" title="Show Details"
        onPress={() => {
          setDisplay(true)            
        }
        } />
        <View>
       { display?
            <View>
              <Text>Name : {name}</Text>
              <Text>Email : {email}</Text>
              <Text>Password : {password}</Text>
            </View>
            :null}
        </View>
    </View>
  );
};


export default First;

const InternalStyles = StyleSheet.create(
  {
    Textbox: {
      color: "white",
      backgroundColor: 'blue',
      fontSize: 30,
      padding: 10,
      marginBottom: 5,
      marginHorizontal: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'black',
      textAlignVertical: 'center'
    },
    etStyle: {
      backgroundColor: 'white',
      fontSize: 30,
      padding: 10,
      marginBottom: 5,
      marginHorizontal: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'black'
    }
  }
)
