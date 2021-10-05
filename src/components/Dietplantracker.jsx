import  React,{useState} from 'react';
import {Button,TextInput,Text, DataTable } from 'react-native-paper';
import {View} from 'react-native';
import axios from "axios";
import Dietrow from './Dietrow';

const getdietplantracker = async (diet) => {

  
const options = {
  method: 'GET',
  url: 'https://food-calorie-data-search.p.rapidapi.com/api/search',
  params: {keyword: diet},
  headers: {
    'x-rapidapi-host': 'food-calorie-data-search.p.rapidapi.com',
    'x-rapidapi-key': '24b0b85f90msh137a06c9574e033p1fd6b0jsnff8deec726dc'
  }
};

    const res = await axios.request(options);
  
    const dat = res.data[0]
    console.log(dat)
    return dat
}



const dietplantracker =   () => {
    const [data,setData] = useState({"confirmed":"--",
                                    "confirmed_diff":"--",
                                    "deaths":"--",
                                    "region":{"province":"--"}})

    const [text,setText] = useState("")
    const cpy = {...data}
    
    const onSubmit = async () => {
      const dta = await getdietplantracker(text)
      if (dta){ 
      setData(dta)}
      else {
        setData(cpy)
      }
  }




  return (<View>
    <View style={{padding: 10}}>
    <TextInput
      label = "Diet"
      onChangeText={text => setText(text)}
      value={text}
    />
    <Button onPress={onSubmit} mode="contained">
        <Text>ADD</Text>
    </Button>
  </View>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title numeric>water</DataTable.Title>
        <DataTable.Title numeric>energy_kcal</DataTable.Title>
        <DataTable.Title numeric>TOTAL</DataTable.Title>
                    
      </DataTable.Header>
      <Dietrow diet = {data}/>
      </DataTable>
      </View>
  );
}
 
export default dietplantracker;