import { Text, ScrollView, Button, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import styles from "./style/style";

 

export default function App() {
  const [Weight, setWeight] = useState(0);
  const [Bottles, setBottles] = useState(0.33);
  const [Time, setTime] = useState(1);
  const [Gender, setGender] = useState('male');
  const [Result, setResult] = useState(0);
  const [ResultStyle, setResultStyle] = useState(styles.hidden)

  function calculate() {
    let result = 0;
    if (Weight<=0) {
      Alert.alert(
        '',
        'Please input your weight.',
        [
          {
            text: 'Ok'
          }
        ]
      );
    } else {
      if (Gender === 'male') {
        result = ((Bottles*8*4.5)-(Weight/10)*Time)/(Weight*0.7);
      } else {
        result = ((Bottles*8*4.5)-(Weight/10)*Time)/(Weight*0.6);
      }
      if (result<=0.2) {
        setResultStyle(styles.low);
      } else if (result<=0.6) {
        setResultStyle(styles.medium);
      } else {
        setResultStyle(styles.high)
      }
      if (result<0) result=0;
    }
    setResult(result);
  }
  
  const bottles = Array();
  bottles.push({label: '1 bottle', value: 0.33});
  bottles.push({label: '2 bottles', value: 0.66});
  bottles.push({label: '3 bottles', value: 0.99});
  bottles.push({label: '4 bottles', value: 1.32});
  bottles.push({label: '5 bottles', value: 1.65});
  bottles.push({label: '6 bottles', value: 1.98});
  const times = Array();
  times.push({label: '1 hour', value: 1});
  times.push({label: '2 hours', value: 2});
  times.push({label: '3 hours', value: 3});
  times.push({label: '4 hours', value: 4});
  times.push({label: '5 hours', value: 5});
  times.push({label: '6 hours', value: 6});

  const genders = [
    {label:'Male', value:'male'},
    {label:'Female', value:'female'}
  ];

  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.field}>
        <Text style={styles.header}>Alcometer</Text>
        <Text style={styles.title}>Weight</Text>
        <TextInput style={styles.input} onChangeText={text => setWeight(text)}
         placeholder="in kilograms" keyboardType='numeric'></TextInput>


        <Text style={styles.title}>Bottles</Text>
        <Picker onValueChange={(itemValue) => setBottles(itemValue)}
          selectedValue={Bottles}>
            {bottles.map((bottle,index)=> (
            <Picker.Item key={index} label={bottle.label} value={bottle.value}/>))}
        </Picker>
        <Text style={styles.title}>Time</Text>
        <Picker onValueChange={(itemValue) => setTime(itemValue)}
          selectedValue={Time}>
            {times.map((time,index)=> (
            <Picker.Item key={index} label={time.label} value={time.value}/>))}
        </Picker>

        <Text style={styles.title}>Gender</Text>
        <RadioForm style={styles.radio} buttonSize={10} radio_props={genders} initial={0}
        onPress={(value) => {setGender(value)}} />
        <Text style={ResultStyle}>{Result.toFixed(2)}</Text>
        <Button style={styles.button} onPress={calculate} title="Calculate"></Button>
      </ScrollView>
    </ScrollView>
  );
}
