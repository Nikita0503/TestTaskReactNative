import React, { Component } from 'react';
import { Text, View, FlatList, Image, Alert } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SelectedPlaceScreen extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 40 : 10
        }}>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 17}}>balance: </Text>
                <Text style={{fontSize: 22, color: 'green'}}>{this.props.currentUser.balance}</Text>
            </View>
            <FlatList
                style={{flex: 1}}
                data={this.props.selectedPlace.services}
                renderItem={({ item }) => 
                  <TouchableOpacity 
                    style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5, margin: 2, backgroundColor: 'gray'}}
                    onPress={() => {
                      if(this.props.currentUser.balance < item.cost){
                        Alert.alert("Error", "You have got not enough money")
                      }else{
                        this.props.orderService(this.props.currentUser,
                          item)
                      }
                    }}>
                    <Text style={{fontSize: 20, color: '#f0f0f0'}}>{item.name}</Text>
                    <Text style={{fontSize: 16, color: 'green'}}>{item.cost}</Text>
                  </TouchableOpacity>}
                keyExtractor={item => item.id}
            />
      </View>
    );
  }
}