export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "taegyun",
      },
      content: "첫 번째 게시글 ",
      Images: [
        {
          src: "/Users/tgkim/Dev/IMG_2810.jpg",
        },
        {
          src: "/Users/tgkim/Dev/IMG_2818.jpg",
        },
        {
          src: "/Users/tgkim/Dev/IMG_2886.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "요호!",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "으어아ㅓㅏ엉",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  Users: {
    id: 1,
    nickname: "taegyun",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
