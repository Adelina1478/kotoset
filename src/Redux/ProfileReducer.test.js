import profilereducer, { addPostActionCreator, deletePost } from "./ProfileReducer";
let state = {
    Posts: [
        { id: 1, message: 'This is my page', likeCount: '5', disCount: '0' },
        { id: 2, message: 'hello hello hello', likeCount: '10', disCount: '2' }
    ]
};
test('new post should be added', () => {
    //1 test data
    let action = addPostActionCreator("Hello")
    //2 action
    let newState = profilereducer(state,action);
    //проверяем что наше ожидаение и получаемое совпадает
    expect(newState.Posts.length).toBe(3);
});


test('new post should be added', () => {
    //1 test data
    let action = deletePost(1);

    //2 action
    let newState = profilereducer(state,action);
    //проверяем что наше ожидаение и получаемое совпадает
    expect(newState.Posts.length).toBe(2);
});

