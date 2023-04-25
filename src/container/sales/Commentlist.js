
import { connect } from 'react-redux';
import Commentlist from '../../screens/sales/Commentlist';
import {
    commentIdlist,
    commentAdd,
    socialfeedlist,
    
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getcommentidlist: state.vendor.getcommentidlist,
});

const mapDispatchToProps = {
    commentIdlist, 
    commentAdd,
    socialfeedlist
};

export default connect(mapStateToProps, mapDispatchToProps)(Commentlist);

