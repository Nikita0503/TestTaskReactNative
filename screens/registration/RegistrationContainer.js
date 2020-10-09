import React from 'react';
import {connect} from 'react-redux';
import {setEmail, 
    setPassword, 
    setRepeatPassword, 
    setName, 
    switchIsAdmin} from '../../redux/registration/actions';
import {addUser} from '../../redux/database/databaseActions';
import RegistrationScreen from './RegistrationScreen';

class RegistrationContainer extends React.Component {
    render(){
        return(
            <RegistrationScreen
                navigation={this.props.navigation}
                email={this.props.email}
                password={this.props.password}
                repeatPassword={this.props.repeatPassword}
                name={this.props.name}
                isAdmin={this.props.isAdmin}
                users={this.props.users}
                setEmail={this.props.setEmail}
                setPassword={this.props.setPassword}
                setRepeatPassword={this.props.setRepeatPassword}
                setName={this.props.setName}
                switchIsAdmin={this.props.switchIsAdmin}
                addUser={this.props.addUser}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword,
        name: state.registration.name,
        isAdmin: state.registration.isAdmin,
        users: state.database.users
    }
}

const mapDispatchToProps = {
    setEmail,
    setPassword,
    setRepeatPassword,
    setName,
    switchIsAdmin,
    addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);