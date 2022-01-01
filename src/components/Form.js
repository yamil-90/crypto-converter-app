import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'

const Form = ({coin, setCoin, fiat, setFiat, setConsultApi}) => {
    
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const consultApi = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const result = await axios.get(url)
            setCoins(result.data.Data);
        }
        consultApi()
    }, [])

    const getFiat = fiat => {
        setFiat(fiat)
    }

    const getCoin = coin => {
        setCoin(coin)
    }

    const quotePrice=(data)=>{
        //check if the fields are not empty
        if(fiat.trim()==='' || coin.trim()===''){
            showAlert()
            return
        }
        setConsultApi(true);
    }
    const showAlert=()=>{
        Alert.alert(
        'Error..',
        'All the fields are mandatory',
        [
            {text:'ok'}
        ]
)
    }

    return (
        <View>
            <Text style={styles.label}>Fiat</Text>
            <Picker
                onValueChange={e => getFiat(e)}
                selectedValue={fiat}
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label="-- Select --" value='' />
                <Picker.Item label="USA Dollar" value='USD' />
                <Picker.Item label="Euro" value='EUR' />
                <Picker.Item label="Peso argentino" value='ARG' />
            </Picker>
            <Text style={styles.label}>Coin</Text>
            <Picker
                onValueChange={e => getCoin(e)}
                selectedValue={coin}
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label="-- Select --" value='' />
                {coins !== '' && coins.map(coinState => (
                    <Picker.Item label={coinState.CoinInfo.FullName} value={coinState.CoinInfo.Name} key={coinState.CoinInfo.Id} />
                ))}
            </Picker>
            <Pressable
            style={styles.btn}
            onPress={()=>quotePrice()}>
                <Text style={styles.btnText}>Quote</Text>
            </Pressable>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20
    },
    btn:{
        backgroundColor:'#5e49e2',
        padding:10,
        marginTop:20
    },
    btnText:{
        color:'#fff',
        fontSize: 18,
        textTransform:'uppercase',
        textAlign:'center',
        fontFamily: 'Lato-Black'
    }
})
