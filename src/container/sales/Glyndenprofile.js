
import { connect } from 'react-redux';
import Glyndenprofile from '../../screens/sales/Glyndenprofile';
import {
    postdetails,
    messagesend,
    addNetworkCru,
    socialfeedlist,
    likeunlikepost
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    grtpostdetail: state.vendor.grtpostdetail,
});
 
const mapDispatchToProps = {
    postdetails,
    socialfeedlist,
    messagesend,
    addNetworkCru,
    likeunlikepost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Glyndenprofile);

