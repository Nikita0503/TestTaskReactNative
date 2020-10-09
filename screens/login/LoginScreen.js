import React, { Component } from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { Input, Button} from 'react-native-elements';

export default class LoginScreen extends Component {
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
                placeholder='password'
                secureTextEntry={true}
                leftIcon={{type: 'FontAwesome', name: 'lock', color: 'black'}}
                onChangeText={(text) => this.props.setPassword(text)}
                value={this.props.password}
              />
              <TouchableOpacity 
                style={{alignItems: 'center'}}
                onPress={() => {
                  for(user of this.props.users){
                    if(this.props.email == user.email){
                      Alert.alert("Help",
                       "password for '" + this.props.email + "' is '"
                       + user.password + "'")
                      return
                    }
                  }
                  Alert.alert("Error", "Account with this email not found")
                }}>
                <Text style={{textDecorationLine: 'underline'}}>forgot password</Text>
              </TouchableOpacity>
            </View>
            <Button 
              containerStyle={{width: '60%', marginTop: 20}} 
              buttonStyle={{backgroundColor: 'black'}} title="Login" 
              onPress={() => {
                if(this.props.email == '' || this.props.password == ''){
                  Alert.alert('Error', 'All fields are required')
                  return
                }
                for(user of this.props.users){
                  if(user.email == this.props.email 
                    && user.password == this.props.password){
                      if(user.type == 'admin'){
                        this.props.navigation.navigate('Admin')
                        return
                      }
                      if(user.type == 'client'){
                        this.props.navigation.navigate('Client')
                        this.props.setCurrentUser(user)
                        return
                      }
                    }
                }
                Alert.alert('Error', 'Account with this data not found')
              }}/>
            <Button containerStyle={{width: '60%', marginTop: 20}} 
              buttonStyle={{backgroundColor: 'black'}} 
              title="Registation" onPress={() => {this.props.navigation.navigate("Registration")}}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}