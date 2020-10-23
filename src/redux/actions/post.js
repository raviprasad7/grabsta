import { FETCH_POSTS, GET_POST, LIKE_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 0);
  }).then(() => {
    const data = [
      {
        id: 1,
        title: "Thai cuisine at its best",
        description: "Loved this food at this Jason_revamp_im2",
        vendor: "Jason_revamp_im2",
        vendorLink: "link",
        ownerId: 4,
        owner: "Jade",
        imageUrl:
          "https://d3nk6pcgpmbqy2.cloudfront.net/compressed/merchants/3-CYWTJYN3GXVDJE/hero/1fa1cd6922744e54863135a463c7144b_1567045255369141481.jpeg",
        likes: 4,
        isLiked: true,
        hashtags: ["#ambience", "#portions", "#outdoor", "#brunch"],
      },
      {
        id: 2,
        title: "Mexicans is love",
        description: "Mexicans,Grocery test,Hematnya Berbuka",
        vendor: "Ting restaurant next open time",
        vendorLink: "link",
        ownerId: 4,
        owner: "Zoe",
        imageUrl:
          "https://d3nk6pcgpmbqy2.cloudfront.net/compressed/merchants/6-CYNUCVDVE8MCEX/hero/05db0b5a05934d0c844dc34546ae878b_1568873863164253339.jpeg",
        likes: 2,
        isLiked: false,
        hashtags: [
          "#friendlyservice",
          "#courteousstaff",
          "#cozyplace",
          "#dinein",
        ],
      },
    ];
    dispatch({
      type: FETCH_POSTS,
      payload: data,
      isLoading: false,
    });
  });
};

export const likePost = () => (dispatch) => {
  console.log("liking");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    });
  }).then(() => {
    dispatch({
      type: LIKE_POST,
      success: true,
    });
  });
};
