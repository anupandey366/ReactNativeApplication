import React,{useState} from "react";
import {Text,View,Button} from 'react-native';

const First = () => {

  const [name,setName] = useState("ANU");

    return(
      <View>
        <Text style={{fontSize: 30}}>Name : </Text>
        <Second name={name}/>
        <Button title="Change" color={"red"} onPress={()=>setName("Aaditya")}/>
      </View>
    );
};

const Second = (props) => {
  return(
    <View>
      <Text style={{fontSize: 30}}>{props.name}</Text>
    </View>
  );
};

export default First;
