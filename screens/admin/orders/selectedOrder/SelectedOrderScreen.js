import React, { Component } from 'react';
import {ORDER_STATUS_NEW, ORDER_STATUS_COMPLETED, ORDER_STATUS_REJECTED} from '../../../../redux/database/databaseActions';
import { Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class OrdersScreen extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 40 : 10}}>
            <Text style={{marginLeft: 10}}>Name:</Text>
            <Input
                placeholder='Name'
                onChangeText={(text) => this.props.setName(text)}
                value={this.props.selectedOrder.client.name}
              />
            <Text style={{marginLeft: 10}}>Date:</Text>
            <Input
                placeholder='Date'
                onChangeText={(text) => this.props.setDate(text)}
                value={this.props.selectedOrder.date}
              />
            <Text style={{marginLeft: 10}}>Service:</Text>
            <Input
              placeholder='Service'
              onChangeText={(text) => this.props.setService(text)}
              value={this.props.selectedOrder.service.name}
            />
            <Text style={{marginLeft: 10}}>Cost:</Text>
            <Input
              placeholder='Cost'
              keyboardType="numeric"
              onChangeText={(text) => {this.props.setCost(text)}}
              value={this.props.selectedOrder.service.cost.toString()}
            />
            <Text>status: <Text style={{color: 'blue'}}>{this.getStatus()}</Text></Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 5}}>
                <View style={{width: '45%'}}>
                    <Input placeholder='Why?' 
                        value={this.props.selectedOrder.whyRejected}
                        onChangeText={(text) => this.props.setWhyRejected(text)}/>
                    <Button 
                        title="Return"
                        onPress={() => {
                            if(this.props.selectedOrder.whyRejected == ''
                            || this.props.selectedOrder.whyRejected == undefined){
                                Alert.alert("Error", 'Reason is needed')
                                return
                            } 
                            this.props.setStatus(ORDER_STATUS_REJECTED)
                        }}/>
                </View>
                <View style={{width: '45%', justifyContent: 'flex-end'}}>
                    <Button 
                        title="Сompleted"
                        onPress={() => {
                            this.props.setStatus(ORDER_STATUS_COMPLETED)
                        }}/>
                </View>
            </View>
            <Button
                title="Save"
                buttonStyle={{backgroundColor: 'black'}}
                onPress={() => {
                    this.props.updateOrder(this.props.selectedOrder)
                    if(this.props.selectedOrder.status == ORDER_STATUS_REJECTED){
                      this.props.returnMoney(this.props.selectedOrder)
                    }
                    this.props.navigation.goBack()
                }}
            />
      </View>
    );
  }

  getStatus(){
    if(this.props.selectedOrder.status == ORDER_STATUS_NEW) return 'new'
    if(this.props.selectedOrder.status == ORDER_STATUS_COMPLETED) return 'completed'
    if(this.props.selectedOrder.status == ORDER_STATUS_REJECTED) return 'reject'
  }
}