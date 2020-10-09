import React from 'react';
import {connect} from 'react-redux';
import {deleteDryCleaningPlace} from '../../../redux/database/databaseActions';
import DryCleaningPlacesScreen from './DryCleaningPlacesScreen';

class DryCleaningPlacesContainer extends React.Component {
    render(){
        return(
            <DryCleaningPlacesScreen
                navigation={this.props.navigation}
                dryCleaningPlaces={this.props.dryCleaningPlaces}
                deleteDryCleaningPlace={this.props.deleteDryCleaningPlace}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        dryCleaningPlaces: state.database.dryCleaningPlaces,
    }
}

const mapDispatchToProps = {
    deleteDryCleaningPlace,
}

export default connect(mapStateToProps, mapDispatchToProps)(DryCleaningPlacesContainer);