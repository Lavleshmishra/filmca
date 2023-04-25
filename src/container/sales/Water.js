
import { connect } from 'react-redux';
import Water from '../../screens/sales/Water';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Water);

