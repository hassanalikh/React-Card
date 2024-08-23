
import { createContext, useReducer } from "react";

// Create the context
export const PostListContext = createContext({
    postList: [],
    addPost: () => {},
    addInitialPosts: () => {},
    deletePost: () => {}
});

// A Reducer Function
const postReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.payload.postId);
        case 'ADD_INITIAL_POSTS':
            return action.payload;
        case 'ADD_POST':
            return [action.payload, ...state];
        default:
            return state;
    }
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postReducer, []);

    const addPost = (userId, postTitle, postBody, reaction, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Math.random(),
                title: postTitle,
                body: postBody,
                reactions: reaction,
                userId: userId,
                hashTag: tags
            }
        });
    };

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: 'ADD_INITIAL_POSTS',
            payload: posts
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: { postId }
        });
    };

    return (
        <PostListContext.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
            {children}
        </PostListContext.Provider>
    );
};

export default PostListProvider;










// import { createContext, useReducer } from "react";

// // Create the context
// export const PostListContext = createContext({
//     postList: [],
//     addPost: () => { },
//     addInitialPosts : () => {},
//     deletePost: () => { }
// });

// // A Reducer Function
// const postReducer = (currPostList, action) => {
//     let newPostList = currPostList
//     if(action.type === 'DELETE_POST') {
//             newPostList = currPostList.filter(post => post.id !== action.payload.postId);     
//     }
//     else if(action.type === 'ADD_INITIAL_POSTS') {
//             newPostList = action.payload.posts;     
//     }
//     else if(action.type === 'ADD_POST') {
//             newPostList = [action.payload, ...currPostList];     
//     }

//     return newPostList;
// };

// const PostListProvider = ({ children }) => {
//     const [postList, dispatchPostList] = useReducer(postReducer, []);

//     // AddPost Handler
//     const addPost = (userId,postTilte,postBody, reaction , tags) => {
        
//         dispatchPostList({
//             type: 'ADD_POST',
//             payload:
//             {
//                 id: Math.random(),
//                 title: postTilte,
//                 body: postBody,
//                 reactions: reaction,
//                 userId: userId,
//                 hashTag: tags
//             }
//         })
//     };
//     const addInitialPosts = (posts) => {

//         dispatchPostList({
//             type: 'ADD_INITIAL_POSTS',
//             payload:
//             {
//                 posts
//             }
//         });
//     };

//     // Delete Post Handler
//     const deletePost = (postId) => {
//         console.log("postId ..", postId);
//         dispatchPostList({
//             type: 'DELETE_POST',
//             payload: { postId }
//         });
//     };

//     return (
//         <PostListContext.Provider value={{ postList, addPost , addInitialPosts, deletePost }}>
//             {children}
//         </PostListContext.Provider>
//     );
// };

// // const DEFAULT_POST_LIST = [
// //     {
// //         id: '1',
// //         title: 'Going on vacation',
// //         body: 'I am going on vacations in Kashmir where everything is now at its peak level',
// //         reactions: 4,
// //         userId: 'user-9',
// //         hashTag: ['Vacations', 'Kashmir', 'Relaxing in mountain']
// //     },
// //     {
// //         id: '2',
// //         title: 'Passing',
// //         body: 'I am now a graduate degree holder. The 4 years of my life were incredible at Bulc',
// //         reactions: 50,
// //         userId: 'user-3',
// //         hashTag: ['Graduate', 'Unbelievable', 'Exciting']
// //     }
// // ];

// export default PostListProvider;
