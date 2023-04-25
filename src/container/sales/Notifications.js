
import { connect } from 'react-redux';
import Notifications from '../../screens/sales/Notifications';
import { getnotification,
} from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getnotificationlist:state.vendor.getnotificationlist
    
});

const mapDispatchToProps = {
    getnotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

