const SEND_MESSAGE = 'SEND_MESSAGE';


let initialstate={
    dialogs: [
        { id: 1, name: 'Masha' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Karina' },
        { id: 4, name: 'Sabir' },
        { id: 5, name: 'Adelina' },
        { id: 6, name: 'Teo' }
    ],
    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'aaaaaaaaaaa' },
        { id: 4, message: 'Thank you' }
    ]
    
}
export const dialogreducer = (state=initialstate, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages, { id: 5, message: body }]
                
            };
        default:
            return state;
    }

}

export const sendMessageCreator=(newMessageBody )=>({type:SEND_MESSAGE,newMessageBody })

export default dialogreducer;