
import { connect } from 'react-redux';
import Help from '../../screens/profile/Help';

const mapStateToProps = (state) => ({
    //redeemedCoupons: state.coupon.redeemedCoupons,
    //redeemedCouponsLoader: state.coupon.redeemedCouponsLoader,
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Help);

