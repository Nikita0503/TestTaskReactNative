import React, { Component } from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { Input, Button, CheckBox} from 'react-native-elements';

export default class RegistrationScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{flex: 1}}>
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <View style={{width: '90%', alignItems: 'center'}}>
              <Input
                placeholder='email'
                keyboardType='email-address'
                leftIcon={{type: 'Fontisto', name: 'email', color: 'black'}}
                onChangeText={(text) => this.props.setEmail(text)}
                value={this.props.email}
              />
              <Input
                placeholder='name'
                leftIcon={{type: 'ant-design', name: 'user', color: 'black'}}
                onChangeText={(text) => this.props.setName(text)}
                value={this.props.name}
              />
              <Input
                placeholder='password'
                secureTextEntry={true}
                leftIcon={{type: 'FontAwesome', name: 'lock', color: 'black'}}
                onChangeText={(text) => this.props.setPassword(text)}
                value={this.props.password}
              />
              <Input
                placeholder='repeat password'
                secureTextEntry={true}
                leftIcon={{type: 'FontAwesome', name: 'repeat', color: 'black'}}
                onChangeText={(text) => this.props.setRepeatPassword(text)}
                value={this.props.repeatPassword}
              />
              <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end'}}>
                <Text>is admin?</Text>
                <CheckBox
                  checked={this.props.isAdmin}
                  onPress={() => this.props.switchIsAdmin()}
                />
              </View>
            </View>
            <Button 
              containerStyle={{width: '60%', marginTop: 20}} 
              buttonStyle={{backgroundColor: 'black'}} 
              title="Register" 
              onPress={() => {
                if(this.props.email == '' || this.props.password == '' || this.props.repeatPassword == ''){
                  Alert.alert('Error', 'All fields are required')
                  return
                }
                if(this.props.password != this.props.repeatPassword){
                  Alert.alert('Error', 'passwords are not the same!')
                  return
                }
                for(const user of this.props.users){
                  if(user.email == this.props.email){
                    Alert.alert('Error', 'this user already exist')
                    return
                  }
                }
                let type = this.props.isAdmin ? 'admin' : 'client'
                this.props.addUser({
                  email: this.props.email,
                  name: this.props.name,
                  password: this.props.password,
                  type: type,
                  balance: 0 + Math.floor((500 - 0) * Math.random())
                });
                this.props.navigation.goBack();
              }}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}