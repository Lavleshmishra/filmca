
import { connect } from 'react-redux';
import Glynden from '../../screens/sales/Glynden';
import {
    getlistmessage,
    messagesend
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getmessagedetilslist: state.vendor.getmessagedetilslist,
});

const mapDispatchToProps = {
    getlistmessage,
    messagesend
};

export default connect(mapStateToProps, mapDispatchToProps)(Glynden);

