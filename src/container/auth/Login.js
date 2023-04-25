import { connect } from 'react-redux';
import  Login  from '../../screens/auth/Login';
import {login} from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader
});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
