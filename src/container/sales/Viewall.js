
import { connect } from 'react-redux';
import Viewall from '../../screens/sales/Viewall';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Viewall);

