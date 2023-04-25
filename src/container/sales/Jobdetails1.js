
import { connect } from 'react-redux';
import Jobdetails1 from '../../screens/sales/Jobdetails1';
import {
    applyjobsuser,  
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
   
});

const mapDispatchToProps = {
    applyjobsuser
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobdetails1);

