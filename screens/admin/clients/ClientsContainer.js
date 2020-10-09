import React from 'react';
import {connect} from 'react-redux';
import ClientsScreen from './ClientsScreen';

class ClientsContainer extends React.Component {
    render(){
        return(
            <ClientsScreen
                navigation={this.props.navigation}
                users={this.props.users}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.database.users,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);