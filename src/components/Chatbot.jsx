import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

import {GiftedChat} from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './env';

const botAvatar = require('../../../assets/images/robot.png');

const BOT = {
    id_: 2,
    name: 'Mr.Bot',
    // avatar: botAvatar
}

export default class App extends React.Component{

    state = {
        messages: [
          {
            _id: 1,
            text: `welcome to  Dietplan Tracker app Made by hamza and tahseen`,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'FAQ Bot',
              avatar: 'https://i.imgur.com/7k12EPD.png'
            }
          }
        ]
      };

      componentDidMount() {
        Dialogflow_V2.setConfiguration(
          dialogflowConfig.client_email,
          dialogflowConfig.private_key,
          Dialogflow_V2.LANG_ENGLISH_US,
          dialogflowConfig.project_id
        );
      }

      handleGoogleResponse(result) {
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.sendBotResponse(text);
    }
    
    sendBotResponse(text) {

        let msg;

        if (text == 'travel') {
            msg = {
                _id: this.state.messages.length + 1,
                text: 'Would you like to buy\n a plane ticket?',
                image: 'https://images.unsplash.com/photo-1583452924150-c86772c4fab6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                createdAt: new Date(),
                user: BOT
              };
        } else if (text == 'show options') {
            msg = {
                _id: this.state.messages.length + 1,
                text: 'Please choose your destination. ',
                createdAt: new Date(),
                user: BOT,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {title: 'Thailand', value: 'Thailand', borderColor: '#A0522D'},
                        {title: 'USA', value: 'USA', borderColor: '#7b68EE'},
                        {title: 'Japan', value: 'Japan', borderColor: '#008B8B'},
                    ]
                }
              };
        } else {
            msg = {
                _id: this.state.messages.length + 1,
                text,
                createdAt: new Date(),
                user: BOT
              };
        }
    
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));
      }
    
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages)
        }));

        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
            message,
            result => this.handleGoogleResponse(result),
            error => console.log(error)
    );
      }

      onQuickReply(quickReply) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, quickReply)
          }));
  
          let message = quickReply[0].value;
          Dialogflow_V2.requestQuery(
              message,
              result => this.handleGoogleResponse(result),
              error => console.log(error)
      );
      }

      renderBubble = (props) => {
        if(props.currentMessage.isOptions){
          return (
            <ScrollView style={{backgroundColor: 'white'}} horizontal={true}>
              {props.currentMessage.data.map((item) => (
                <Card key={item.title}>
                  <Card.Image style={{width: 220, height: 110}} resizeMode='cover' source={{uri: item.image}}>
                  </Card.Image>
                  <Card.Divider />
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Divider />
                  <Button title='Choose' 
                    style={{height: 35}}
                    onPress={() => this.sendBotResponse(item.title)}/>
                </Card>
              ))}
            </ScrollView>
          )
        }
        
      }
    
      render() {
        return (
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
              user={{
                _id: 1
              }}
            />
          </View>
        );
      }
    }
