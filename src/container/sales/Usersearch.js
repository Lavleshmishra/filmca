
import { connect } from 'react-redux';
import Usersearch from '../../screens/sales/Usersearch';
import {
    alluserlisting,  
} from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getallalluserlistinglist: state.vendor.getallalluserlistinglist,
    
});

const mapDispatchToProps = {
    alluserlisting
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Usersearch);

