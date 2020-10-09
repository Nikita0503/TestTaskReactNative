import React from 'react';
import {connect} from 'react-redux';
import OrdersClientScreen from './OrdersClientScreen';
import {deleteOrder} from '../../../redux/database/databaseActions';

class OrdersClientContainer extends React.Component {
    render(){
        return(
            <OrdersClientScreen
                navigation={this.props.navigation}
                currentUser={this.props.currentUser}
                orders={this.props.orders}
                deleteOrder={this.props.deleteOrder}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.database.currentUser,
        orders: state.database.orders,
    }
}

const mapDispatchToProps = {
    deleteOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersClientContainer);