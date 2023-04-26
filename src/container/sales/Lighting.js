
import { connect } from 'react-redux';
import Lighting from '../../screens/sales/Lighting';
import {
    alljobproject,
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getalljobprojectlist: state.vendor.getalljobprojectlist,
});


const mapDispatchToProps = {
    alljobproject
};

export default connect(mapStateToProps, mapDispatchToProps)(Lighting);

