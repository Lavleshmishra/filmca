
import { connect } from 'react-redux';
import Hairwomen from '../../screens/vender/Hairwomen';
import { businessList } from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    businessIndividualList: state.vendor.businessList,
    loginCredentials: state.auth.loginCredentials,
    isInternetConnected: state.auth.isInternetConnected,
});

const mapDispatchToProps = {
    businessList
};

export default connect(mapStateToProps, mapDispatchToProps)(Hairwomen);

