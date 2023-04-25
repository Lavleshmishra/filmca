
import { connect } from 'react-redux';
import Projects from '../../screens/sales/Projects';
import {
    getprojectdata,
} from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getprojectlist: state.vendor.getprojectlist,
   
});

const mapDispatchToProps = {
    getprojectdata
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

