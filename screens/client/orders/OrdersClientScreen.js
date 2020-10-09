import React, { Component } from 'react';
import {ORDER_STATUS_NEW, ORDER_STATUS_COMPLETED, ORDER_STATUS_REJECTED} from '../../../redux/database/databaseActions';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export default class OrdersClientScreen extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 40 : 10}}>
            <FlatList
                data={this.getMyOrders()}
                renderItem={({ item }) => 
                    <Order
                        service={item.service.name}
                        cost={item.service.cost}
                        status={item.status}
                        whyRejected={item.whyRejected}
                        onPress={() => {
                          this.props.deleteOrder(item)
                        }}
                    />}
                keyExtractor={item => item.id}
            />
      </View>
    );
  }

  getMyOrders(){
      return this.props.orders.filter(item => item.client.email == this.props.currentUser.email)
  }
}

const Order = (props) =>
{
    return(
        <TouchableOpacity 
          style={{width: '100%', borderBottomColor: 'gray', borderBottomWidth: 1, borderTopWidth: 1, backgroundColor: '#f0f0f0', padding: 5}}
         >
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.service}</Text>
              <Text style={{fontSize: 16, color: 'green'}}>{props.cost}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text>status: <Text style={{color: 'blue'}}>{getStatus()}</Text></Text>
            </View>
            {getButtonOK()}
        </TouchableOpacity>
    )

    function getStatus(){
      if(props.status == ORDER_STATUS_NEW) return 'in processing...'
      if(props.status == ORDER_STATUS_COMPLETED) return 'completed!'
      if(props.status == ORDER_STATUS_REJECTED) return 'rejected: ' + props.whyRejected
    }

    function getButtonOK(){
      if(props.status == ORDER_STATUS_NEW) return
      return(
        <Button
          title="OK"
          onPress={props.onPress}
        />
      )
    }
}