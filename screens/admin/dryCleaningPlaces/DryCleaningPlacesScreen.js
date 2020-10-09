import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

export default class DryCleaningPlacesScreen extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 40 : 10
        }}>
        <FlatList
            style={{flex: 1}}
            data={this.props.dryCleaningPlaces}
            renderItem={({ item }) => 
                <DryCleaningPlace
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    services={item.services}
                    photos={item.photos}
                    deleteDryCleaningPlace={this.props.deleteDryCleaningPlace}
                />}
            keyExtractor={item => item.id}
        />
        <Button
            containerStyle={{width: '100%'}} 
            buttonStyle={{backgroundColor: 'black'}} 
            title="Add new place" 
            onPress={() => {
                this.props.navigation.navigate("AddNewPlace")
            }}
        />
      </View>
    );
  }
}

const DryCleaningPlace = (props) =>
{
    return(
        <View style={{width: '100%', borderBottomColor: 'gray', borderBottomWidth: 1, borderTopWidth: 1, backgroundColor: '#f0f0f0'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.name}</Text>
            <Text style={{fontSize: 17}}>{props.description}</Text>
            <FlatList
                style={{width: '100%'}}
                data={props.services}
                renderItem={({ item }) => <Text>· {item.name}</Text>}
                keyExtractor={item => item.id}
            />
            <FlatList
                horizontal
                pagingEnabled
                snapToInterval={Dimensions.get('window').width}
                showsHorizontalScrollIndicator={false}
                style={{height: 150}}
                data={props.photos}
                renderItem={({ item }) => 
                    <Image     
                        source={{uri: item.photo}}
                        style={{width: Dimensions.get('window').width, resizeMode: 'contain'}} 
                    />}
                keyExtractor={item => item.id}
                />
            <Button
                containerStyle={{width: '100%', marginTop: 5}} 
                buttonStyle={{backgroundColor: 'black'}} 
                title="Delete this place" 
                onPress={() => props.deleteDryCleaningPlace(props.id)}
            />
        </View>
    )
}