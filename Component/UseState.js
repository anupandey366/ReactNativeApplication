import React, { useState } from "react";
import { Text, View, Button } from 'react-native';

const First = () => {

  const [name, setName] = useState();

  function stateUpdate(msg) {
    setName(msg)
  }
  return (
    <View>
      <Second />
      <Text style={{ fontSize: 30 }}>{name}</Text>
      {/* <Button title="Press" onPress={() => {alert("Pressed.............")}}/> */}
      <Button title="Press" onPress={() => { stateUpdate("My Name") }} />
      <Button title="Press2" onPress={() => { stateUpdate("Your Name") }} />
    </View>
  );
};

const Second = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Name: Aaditya Verma</Text>
    </View>
  );
};

export default First;
