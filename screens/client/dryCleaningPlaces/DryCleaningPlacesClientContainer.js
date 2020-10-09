import React from 'react';
import {connect} from 'react-redux';
import {setSelectedPlace} from '../../../redux/client/selectedPlace/actions'
import DryCleaningPlacesClientScreen from './DryCleaningPlacesClientScreen';

class DryCleaningPlacesClientContainer extends React.Component {
    render(){
        return(
            <DryCleaningPlacesClientScreen
                navigation={this.props.navigation}
                dryCleaningPlaces={this.props.dryCleaningPlaces}
                currentUser={this.props.currentUser}
                setSelectedPlace={this.props.setSelectedPlace}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        dryCleaningPlaces: state.database.dryCleaningPlaces,
        currentUser: state.database.currentUser
    }
}

const mapDispatchToProps = {
    setSelectedPlace
}

export default connect(mapStateToProps, mapDispatchToProps)(DryCleaningPlacesClientContainer);