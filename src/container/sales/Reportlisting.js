
import { connect } from 'react-redux';
import Reportlisting from '../../screens/sales/Reportlisting';

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    //redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    //redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Reportlisting);

