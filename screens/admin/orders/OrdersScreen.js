import React, { Component } from 'react';
import {ORDER_STATUS_NEW, ORDER_STATUS_COMPLETED, ORDER_STATUS_REJECTED} from '../../../redux/database/databaseActions';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export default class OrdersScreen extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 40 : 10}}>
            <FlatList
                data={this.props.orders}
                renderItem={({ item }) => 
                    <Order
                        service={item.service.name}
                        cost={item.service.cost}
                        client={item.client.name}
                        date={item.date}
                        status={item.status}
                        onPress={() => {
                          this.props.setSelectedOrder(item)
                          this.props.navigation.navigate('SelectedOrder');
                        }}
                    />}
                keyExtractor={item => item.id}
            />
      </View>
    );
  }
}

const Order = (props) =>
{
    return(
        <TouchableOpacity 
          style={{width: '100%', borderBottomColor: 'gray', borderBottomWidth: 1, borderTopWidth: 1, backgroundColor: '#f0f0f0', padding: 5}}
          onPress={props.onPress}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.service}</Text>
              <Text style={{fontSize: 16, color: 'green'}}>{props.cost}</Text>
            </View>
            <Text>client: {props.client}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>date: {props.date}</Text>
              <Text>status: <Text style={{color: 'blue'}}>{getStatus()}</Text></Text>
            </View>
        </TouchableOpacity>
    )

    function getStatus(){
      if(props.status == ORDER_STATUS_NEW) return 'new'
      if(props.status == ORDER_STATUS_COMPLETED) return 'completed'
      if(props.status == ORDER_STATUS_REJECTED) return 'reject'
    }
}