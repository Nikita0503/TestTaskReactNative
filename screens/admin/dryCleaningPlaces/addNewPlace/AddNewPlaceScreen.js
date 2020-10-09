import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import { Picker, Icon } from "native-base";
export default class AddNewPlaceScreen extends Component {

  pickImage = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.props.addPhoto({
          id: this.props.photos.length + 1,
          photo: source.uri
        })
      }
    });
  }

  render() {
    return (
      <View style={{
          width: '100%',
          paddingTop: Platform.OS === 'ios' ? 40 : 10
        }}>
        <Input
          placeholder='name'
          onChangeText={(text) => this.props.setName(text)}
          value={this.props.name}
        />
        <Input
          placeholder='description'
          onChangeText={(text) => this.props.setDescription(text)}
          value={this.props.description}
        />
        <Text style={{marginStart: 10}}>Services:</Text>
        <FlatList
            data={this.props.services}
            renderItem={({ item }) => 
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{width: '50%', textAlign: 'center'}}>{item.name}</Text>
                  <Text style={{width: '50%', textAlign: 'center'}}>{item.cost}</Text>
                </View>}
            keyExtractor={item => item.id}
        />
        <View style={{flexDirection: 'row'}}>
          <Input
            containerStyle={{flex: 1}}
            placeholder='service name'
            onChangeText={(text) => this.props.setServiceName(text)}
            value={this.props.serviceName}
          />
          <Input
            containerStyle={{flex: 1}}
            placeholder='cost'
            keyboardType='numeric'
            onChangeText={(text) => this.props.setServiceCost(text)}
            value={this.props.serviceCost}
          />
        </View>
        <Button
            containerStyle={{width: '100%'}}
            buttonStyle={{backgroundColor: 'black'}}
            title="Add service" 
            onPress={() => {
              if(this.props.serviceName == '' || this.props.serviceCost == 0){
                Alert.alert('Error', 'All fields are required')
                return
              }
              this.props.addService()
            }}
        />
        <FlatList
            horizontal
            data={this.props.photos}
            renderItem={({ item }) => 
            <Image
              style={{width: 60, height: 60, margin: 5}}
              source={{
                  uri: item.photo
              }}
            />}
            keyExtractor={item => item.id}
        />
        <Button
            containerStyle={{width: '100%', marginTop: 5}} 
            buttonStyle={{backgroundColor: 'black'}} 
            title="Add photo" 
            onPress={() => {
              this.pickImage()
            }}
        />
        <Picker
           style={{alignSelf: 'center'}}
           mode="dropdown"
           iosIcon={<Icon name="arrow-down" />}
           placeholder="Select service type"
           placeholderStyle={{ color: "#bfc6ea" }}
           placeholderIconColor="#007aff"
           selectedValue={this.props.type}
           onValueChange={(value) => {
             this.props.setType(value)
           }}
         >
           <Picker.Item label="Сleaning trousers" value="1" />
           <Picker.Item label="Shirt washing" value="2" />
         </Picker>
         <Button
            containerStyle={{width: '100%', marginTop: 5}} 
            buttonStyle={{backgroundColor: 'black'}} 
            title="Add" 
            onPress={() => {
              if(this.props.name == ''
              || this.props.description == ''
              || this.props.services.length == 0
              || this.props.photos.length == 0
              || this.props.type == undefined){
                Alert.alert("Error", "All fields are required")
                return
              }
              this.props.addDryCleaningPlace({
                id: new Date().getTime(),
                name: this.props.name,
                description: this.props.description,
                services: this.props.services,
                photos: this.props.photos,
                type: this.props.type
              })
              this.props.navigation.goBack()
            }}
          />
      </View>
    );
  }
}