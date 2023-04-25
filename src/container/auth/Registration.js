import { connect } from 'react-redux';
import Registration from '../../screens/auth/Registration';
import {login,signUp} from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader,
    signupCredentials:state.auth.signupCredentials,
    loginCredentials: state.auth.loginCredentials,
});

const mapDispatchToProps = {
    login,
    signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

