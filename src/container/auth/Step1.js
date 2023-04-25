import { connect } from 'react-redux';
import  Step1  from '../../screens/auth/Step1';
import {departmentList,
    subdepartmentList,
    updateworkdepartment,
    updateAreatoTravel,
    updateAvailAbilty
} from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader,
    signupCredentials:state.auth.signupCredentials,
    getdepartMentlist: state.auth.getdepartMentlist,
    getsubdepartmentlist: state.auth.getsubdepartmentlist,
    departmentworkupdate: state.auth.departmentworkupdate,
    updateability: state.auth.updateability
});

const mapDispatchToProps = {
    departmentList,
    subdepartmentList,
    updateworkdepartment,
    updateAreatoTravel,
    updateAvailAbilty,
};

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
