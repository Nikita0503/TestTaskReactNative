import React from 'react';
import {connect} from 'react-redux';
import {setSelectedOrder} from '../../../redux/admin/orders/selectedOrder/actions';
import OrdersScreen from './OrdersScreen';

class OrdersContainer extends React.Component {
    render(){
        return(
            <OrdersScreen
                navigation={this.props.navigation}
                orders={this.props.orders}
                setSelectedOrder={this.props.setSelectedOrder}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.database.orders,
    }
}

const mapDispatchToProps = {
    setSelectedOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);