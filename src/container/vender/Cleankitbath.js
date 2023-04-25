
import { connect } from 'react-redux';
import Cleankitbath from '../../screens/vender/Cleankitbath';
import { businessList } from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    businessIndividualList: state.vendor.businessList,
    loginCredentials: state.auth.loginCredentials,
    isInternetConnected: state.auth.isInternetConnected,
});

const mapDispatchToProps = {
    businessList
};

export default connect(mapStateToProps, mapDispatchToProps)(Cleankitbath);

