
import { connect } from 'react-redux';
import Camera from '../../screens/sales/Camera';
import {
    mycrulist
} from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    getmycrulist: state.vendor.getmycrulist,

    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    mycrulist
};

export default connect(mapStateToProps, mapDispatchToProps)(Camera);

