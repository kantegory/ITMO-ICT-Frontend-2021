import MyModal from "../components/UI/MyModal/MyModal";

export default {
    title: "MyModal",
    component: MyModal,
    argTypes: {
        children: {type: "string", defaultValue: "Inside content"}
    }
}

export const Default = ({children}) => (<MyModal visible={true} setVisible={() => null}>
    <div>{children}</div>
</MyModal>)
