import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

const Header = () => {
    return (
        <>
                    <Text style={styles.header}>Crypto Converter</Text>
            </>
        
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5e49e2',
        paddingBottom:10,
        textAlign:'center',
        textTransform:'uppercase',
        fontSize:20,
        color:'#fff',
        marginBottom:30

    }
})
