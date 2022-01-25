import ForgotPasswordForm from "../components/ForgotPasswordForm/ForgotPasswordForm";
import MyModal from "../components/UI/MyModal/MyModal";

export default {
    title:"Forgot Password From",
    component:ForgotPasswordForm
}
export const Form = () => <MyModal visible={true} setVisible={()=>null}><ForgotPasswordForm forgotPasswordForm={true} setForgotPasswordForm={()=>null}/></MyModal>