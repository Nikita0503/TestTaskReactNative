import React from 'react';
import {connect} from 'react-redux';
import {orderService} from '../../../redux/database/databaseActions'
import SelectedPlaceScreen from './SelectedPlaceScreen';

class SelectedPlaceContainer extends React.Component {
    render(){
        return(
            <SelectedPlaceScreen
                navigation={this.props.navigation}
                currentUser={this.props.currentUser}
                selectedPlace={this.props.selectedPlace}
                orderService={this.props.orderService}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.database.currentUser,
        selectedPlace: state.selectedPlace.selectedPlace,
    }
}

const mapDispatchToProps = {
    orderService
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPlaceContainer);