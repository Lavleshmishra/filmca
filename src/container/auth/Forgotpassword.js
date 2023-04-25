import { connect } from 'react-redux';
import  Forgotpassword  from '../../screens/auth/Forgotpassword';
import {login} from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader
});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Forgotpassword);
