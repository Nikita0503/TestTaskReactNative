import React from 'react';
import {connect} from 'react-redux';
import {setEmail, setPassword} from '../../redux/login/actions';
import {setCurrentUser} from '../../redux/database/databaseActions';
import LoginScreen from './LoginScreen';

class LoginContainer extends React.Component {
    render(){
        return(
            <LoginScreen
                navigation={this.props.navigation}
                email={this.props.email}
                password={this.props.password}
                users={this.props.users}
                setEmail={this.props.setEmail}
                setPassword={this.props.setPassword}
                setCurrentUser={this.props.setCurrentUser}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.login.email,
        password: state.login.password,
        users: state.database.users
    }
}

const mapDispatchToProps = {
    setEmail,
    setPassword,
    setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);