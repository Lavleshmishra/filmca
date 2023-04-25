
import { connect } from 'react-redux';
import Profile from '../../screens/profile';

const mapStateToProps = (state) => ({
    //redeemedCoupons: state.coupon.redeemedCoupons,
    //redeemedCouponsLoader: state.coupon.redeemedCouponsLoader,
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

