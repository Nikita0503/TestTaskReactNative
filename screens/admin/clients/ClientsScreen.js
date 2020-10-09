import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

export default class ClientsScreen extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 40 : 10
        }}>
        <FlatList
            style={{flex: 1}}
            data={this.getClients()}
            renderItem={({ item }) => 
                <View style={{height: 60, justifyContent: 'space-between', padding: 5, backgroundColor: 'gray', marginVertical: 1}}>
                    <Text style={{fontSize: 20, color: 'white'}}>{item.name}</Text>
                    <Text style={{color: '#f0f0f0'}}>{item.email}</Text>
                </View>}
            keyExtractor={item => item.id}
        />
      </View>
    );
  }

  getClients(){
      return this.props.users.filter(item => {
          if(item.type == 'client'){
              return true
          }else{
              return false
          }
      })
  }
}