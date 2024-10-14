import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/AuthRedirect';
import { sendMessageCreator } from '../../Redux/DialogReducer';
import Dialogs from './Dialogs';

let mapStateToProps =(state)=>{
    return{
        dialogPage: state.dialogPage,
    }

}
let mapDispatchToProps =(dispatch)=>{
    return{
        sendMessage: (newMessageBody )=>{dispatch(sendMessageCreator(newMessageBody ));}
    
}
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect

)(Dialogs);