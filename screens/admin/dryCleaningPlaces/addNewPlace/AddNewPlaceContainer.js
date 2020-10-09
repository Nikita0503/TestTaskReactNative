import React from 'react';
import {connect} from 'react-redux';
import {setName,
    setDescription,
    setServiceName,
    setServiceCost,
    addService,
    addPhoto,
    setType} from '../../../../redux/admin/dryCleaningPlaces/addNewPlace/actions';
import {addDryCleaningPlace} from '../../../../redux/database/databaseActions';
import AddNewPlaceScreen from './AddNewPlaceScreen';

class AddNewPlaceContainer extends React.Component {
    render(){
        return(
            <AddNewPlaceScreen
                navigation={this.props.navigation}
                dryCleaningPlaces={this.props.dryCleaningPlaces}
                name={this.props.name}
                description={this.props.description}
                serviceName={this.props.serviceName}
                serviceCost={this.props.serviceCost}
                services={this.props.services}
                photos={this.props.photos}
                type={this.props.type}
                setName={this.props.setName}
                setDescription={this.props.setDescription}
                setServiceName={this.props.setServiceName}
                setServiceCost={this.props.setServiceCost}
                addService={this.props.addService}
                addPhoto={this.props.addPhoto}
                setType={this.props.setType}
                addDryCleaningPlace={this.props.addDryCleaningPlace}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        dryCleaningPlaces: state.database.dryCleaningPlaces,
        name: state.addNewPlace.name,
        description: state.addNewPlace.description,
        serviceName: state.addNewPlace.serviceName,
        serviceCost: state.addNewPlace.serviceCost,
        services: state.addNewPlace.services,
        photos: state.addNewPlace.photos,
        type: state.addNewPlace.type
    }
}

const mapDispatchToProps = {
    setName,
    setDescription,
    setServiceName,
    setServiceCost,
    addService,
    addPhoto,
    addDryCleaningPlace,
    setType
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPlaceContainer);