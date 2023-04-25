
import { connect } from 'react-redux';
import Cru from '../../screens/sales/Cru';
import {
    mycrulist
} from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getmycrulist: state.vendor.getmycrulist,
});


const mapDispatchToProps = {
    mycrulist
};

export default connect(mapStateToProps, mapDispatchToProps)(Cru);

