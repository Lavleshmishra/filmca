
import { connect } from 'react-redux';
import Gysercondition from '../../screens/sales/Gysercondition';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Gysercondition);

