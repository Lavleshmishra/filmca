
import { connect } from 'react-redux';
//import Vender from '../../screens/vender';
import Saleslisting from '../../screens/sales/Saleslisting';
import { businessList } from '../../redux/actions/Vendor';
 
const mapStateToProps = (state) => ({
    businessIndividualList: state.vendor.businessList,
    loginCredentials: state.auth.loginCredentials,
    isInternetConnected: state.auth.isInternetConnected,
});

const mapDispatchToProps = {
    businessList
};

export default connect(mapStateToProps, mapDispatchToProps)(Saleslisting);

