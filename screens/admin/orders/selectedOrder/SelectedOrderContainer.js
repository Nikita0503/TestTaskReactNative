import React from 'react';
import {connect} from 'react-redux';
import {setName,
        setDate,
        setService,
        setCost,
        setStatus,
        setWhyRejected} from '../../../../redux/admin/orders/selectedOrder/actions';
import {updateOrder, returnMoney} from '../../../../redux/database/databaseActions';
import SelectedOrderScreen from './SelectedOrderScreen';

class SelectedOrderContainer extends React.Component {
    render(){
        return(
            <SelectedOrderScreen
                navigation={this.props.navigation}
                selectedOrder={this.props.selectedOrder}
                whyRejected={this.props.whyRejected}
                setName={this.props.setName}
                setDate={this.props.setDate}
                setService={this.props.setService}
                setCost={this.props.setCost}
                setStatus={this.props.setStatus}
                updateOrder={this.props.updateOrder}
                setWhyRejected={this.props.setWhyRejected}
                returnMoney={this.props.returnMoney}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedOrder: state.selectedOrder.selectedOrder,
    }
}

const mapDispatchToProps = {
    setName,
    setDate,
    setService,
    setCost,
    setStatus,
    updateOrder,
    setWhyRejected,
    returnMoney
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedOrderContainer);