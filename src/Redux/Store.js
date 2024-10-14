import { dialogreducer } from "./DialogReducer";
import profilereducer from "./ProfileReducer";


let store = {

    _state: {
        profilePage: {
            Posts: [
                { id: 1, message: 'This is my page', likeCount: '5', disCount: '0' },
                { id: 2, message: 'hello hello hello', likeCount: '10', disCount: '2' }
            ],
            newPostText: 'hi'
        },
        dialogPage: {
            Dialogs: [
                { id: 1, name: 'Masha' },
                { id: 2, name: 'Misha' },
                { id: 3, name: 'Karina' },
                { id: 4, name: 'Sabir' },
                { id: 5, name: 'Adelina' },
                { id: 6, name: 'Teo' }
            ],
            Messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'aaaaaaaaaaa' },
                { id: 4, message: 'Thank you' }
            ],
            newMessageBody:""

        }
    },
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {
        console.log('state was changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
     dispatch(action) { //{type: 'ADD-Post'}
        this._state.profilePage=profilereducer(this._state.profilePage,action);
        this._state.dialogPage=dialogreducer(this._state.dialogPage,action);
        this._rerenderEntireTree(this._state);
        
    }

}



export default store;