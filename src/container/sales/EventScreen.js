
import { connect } from 'react-redux';
import EventScreen from '../../screens/sales/EventScreen';
import {
    geteventcategory,
    getevent,
    socialfeedlist
} from '../../redux/actions/Vendor';
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    geteventcategorylist: state.vendor.geteventcategorylist,
    geteventlist: state.vendor.geteventlist,
    geteventdetaillist: state.vendor.geteventdetaillist,

});
const mapDispatchToProps = {
    geteventcategory,
    getevent,
    socialfeedlist
};

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen);

