import React from 'react';
import {Stylesheet, Text, View} from 'react-native';

const Request = ({result})=>{
    if(Object.keys(result).length===0)return null;
    
    return(
        <View style={styles.result}>
            <Text style={[styles.text, styles.price]}>
                <Text style={styles.span}>
                    {result.PRICE}
                </Text>
            </Text>
            <Text style={styles.text}>Highest daily price: {' '}
                <Text style={styles.span}>
                    {result.HIGHDAY}
                </Text>
            </Text>
            <Text style={styles.text}>Lowest daily price: {' '}
                <Text style={styles.span}>
                    {result.LOWDAY}
                </Text>
            </Text>
            <Text style={styles.text}>Variation in the last 24 hours: {' '}
                <Text style={styles.span}>
                    {result.CHANGEPCT24HOUR} %
                </Text>
            </Text>
            <Text style={styles.text}>Last update
                <Text style={styles.span}>
                    {result.LASTUPDATE}
                </Text>
            </Text>
        </View>
    )

}

const styles = Stylesheet.create({
    result:{
        backgroundColor: '#5e49e2',
        padding:20,
    },
    text:{
        color:'#fff',
        fontFamily: 'Lato-Regular',
        fontSize:18,
        marginBottom:10
    },
    price: {
        fontSize:38
    },
    span:{
        fontFamily: 'Lato-Black',

    }
})
export default Request