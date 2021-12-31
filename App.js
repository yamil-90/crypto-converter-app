import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Form from './src/components/Form';
import Header from './src/components/Header';

const App = () => {

  const [fiat, setFiat] = useState('')
    const [coin, setCoin] = useState('');
    const [consultApi, setConsultApi] = useState(false)

useEffect(() => {
 if(consultApi){
  console.log('cambio');
 }
}, [consultApi])

  return (
    <View>
      <Header/>
      <Image
      style={styles.image}
      source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.content}>
      <Form
      fiat={fiat}
      setFiat={setFiat}
      coin={coin}
       setCoin={setCoin}
       setConsultApi={setConsultApi}
      />
      </View>
    </View>
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
  }
})
