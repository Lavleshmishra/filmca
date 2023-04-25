
import { connect } from 'react-redux';
import Matthew from '../../screens/sales/Matthew';
import {
    profiledetail,
    updateprofile,
    updatebackgroudimage,
    updateabout,
    deletepost,
    mycrulist, 
    mynetworklist,
    socialfeedlist,
    likeunlikepost,
    
} from '../../redux/actions/Vendor';
import { updateAvailAbilty} from '../../redux/actions/Auth'
const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    signupCredentials:state.auth.signupCredentials,
    getprofilelist: state.vendor.getprofilelist,
    getmycrulist: state.vendor.getmycrulist,
    getmynetworklist: state.vendor.getmynetworklist,
    updateability: state.auth.updateability
});
 
const mapDispatchToProps = {
    updateAvailAbilty,
    profiledetail,
    updateprofile,
    updatebackgroudimage,
    updateabout,
    deletepost,
    mycrulist,
    mynetworklist,
    socialfeedlist,
    likeunlikepost,
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Matthew);

