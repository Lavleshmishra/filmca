
import { connect } from 'react-redux';
import Messages from '../../screens/sales/Messages';
import { getmessage,
     } from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    getmessagelist: state.vendor.getmessagelist,
    loginCredentials: state.auth.loginCredentials,
});

const mapDispatchToProps = {
    getmessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

