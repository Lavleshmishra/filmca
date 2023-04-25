
import { connect } from 'react-redux';
import Newproject from '../../screens/sales/Newproject';
import {
    addnewproject,
    getproduction,
    mycrulist,
    inviteprojectcru
} from '../../redux/actions/Vendor';


const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getproductionlist: state.vendor.getproductionlist,
    getmycrulist: state.vendor.getmycrulist,
    addproductiontype: state.vendor.addproductiontype,
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    addnewproject,
    getproduction,
    mycrulist,
    inviteprojectcru
};

export default connect(mapStateToProps, mapDispatchToProps)(Newproject);

