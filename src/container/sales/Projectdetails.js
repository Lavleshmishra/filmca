
import { connect } from 'react-redux';
import Projectdetails from '../../screens/sales/Projectdetails';
import {
    getprojectdetail,acceptuser,
    deleteuserrequest,
    removeuserfromlist
} from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getprojectdetilslist: state.vendor.getprojectdetilslist,

});

const mapDispatchToProps = {
    getprojectdetail,
    acceptuser,
    deleteuserrequest,
    removeuserfromlist
};

export default connect(mapStateToProps, mapDispatchToProps)(Projectdetails);

