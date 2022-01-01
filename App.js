import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';

import Request from './src/components/Request';
import Form from './src/components/Form';
import Header from './src/components/Header';

const App = () => {

  const [fiat, setFiat] = useState('');
  const [coin, setCoin] = useState('');
  const [consultApi, setConsultApi] = useState(false);
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false)

useEffect(() => {
  const requestApi= async ()=>{
    if(consultApi){
      const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coin}&tsyms=${fiat}`
      const result = await axios.get(url);
      setLoading(true)
      setTimeout(()=>{
        setResult(result.data.DISPLAY[coin][fiat]);
        setConsultApi(false);
        setLoading(false)
      },3000)
    }
  }
}, [consultApi]);

const component = loading? <ActivityIndicator/> : <Request result={result}/>

  return (
    <ScrollView>
      <Header/>
      <Image
      style={styles.image}
      source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.content}>
      <Form
        fiat={fiat}
        coin={coin}
        setFiat={setFiat}
        setCoin={setCoin}
        setConsultApi={setConsultApi}
      />
      </View>
      <View style={styles.componentView}> 
      <component
      size="large"
      color="#5e49e2"
      />
      </View>
      
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  image:{
    width:'100%',
    height:150,
    marginHorizontal: '2.5%'
  },
  content:{
    marginHorizontal:'2.5%'
  },
  componentView:{
    marginTop: 40
  }
})
