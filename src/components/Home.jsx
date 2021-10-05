import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native'
import { Button,Text } from 'react-native-paper';

const Home = ({stats}) => {

    const styles = StyleSheet.create({
        content:{
            flex:1,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        },
        buttons: {
            padding:"3em"
        },

      });


    return(
        <View style={styles.content}>
            <View style={styles.buttons}>
            <Button onPress={stats} mode="contained" labelStyle={{fontSize: 25}}>
                <Text style={{fontSize:16}}></Text>
            </Button>
            </View>
            
        </View>
    )


}

export default Home