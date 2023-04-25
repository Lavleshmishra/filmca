
import { connect } from 'react-redux';
import Eventdetail from '../../screens/sales/Eventdetail';
import {
    geteventdetail,
} from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    geteventdetaillist: state.vendor.geteventdetaillist,

});

const mapDispatchToProps = {
    geteventdetail
};

export default connect(mapStateToProps, mapDispatchToProps)(Eventdetail);

