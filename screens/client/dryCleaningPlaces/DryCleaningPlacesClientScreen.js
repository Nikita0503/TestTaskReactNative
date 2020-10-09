import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class DryCleaningPlacesClientScreen extends Component {
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
                name={item.name}
                photos={item.photos}
                onPress={() => {
                    this.props.setSelectedPlace(item)
                    this.props.navigation.navigate('SelectedPlace')
                }}
            />}
            keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const DryCleaningPlace = (props) =>
{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Card>
                <Card.Title>{props.name}</Card.Title>
                <Card.Divider/>
                <Image
                    style={{height: 200, resizeMode: 'contain', margin: 5}}
                    source={{
                        uri: props.photos[0].photo
                    }}
                />
            </Card>
        </TouchableOpacity>
    )
}