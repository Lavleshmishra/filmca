
import { connect } from 'react-redux';
import Likelist from '../../screens/sales/Likelist';

import {
    getlike,
    
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getlikstlist: state.vendor.getlikstlist,
});

const mapDispatchToProps = {
    getlike
};

export default connect(mapStateToProps, mapDispatchToProps)(Likelist);

