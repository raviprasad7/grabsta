import {
  FETCH_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  FETCH_POSTS_ENDPOINT,
} from "./types";

export const fetchPosts = () => (dispatch) => {
  // return fetch(FETCH_POSTS_ENDPOINT, {
  //   header: {
  //     "X-CLIENT-ID": "xtramile",
  //   },
  // })
  //   .then((data) => data.json())
  //   .then((response) => {
  //     console.log("fetched", response);
  //   });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 3000);
  }).then(() => {
    const posts = [
      {
        ID: 3,
        Title: "Health First!!",
        Description:
          "My secret pleasure after a good workout! Nothing is more rewarding than a hearty healthy feast",
        Vendor: "Healty Eating",
        VendorLink: "link",
        OwnerId: 5,
        ImageUrl: "image-3.jpg",
        Likes: 9,
        OwnerName: "Jojje",
        Hashtags: "#foodlove #health ",
      },
      {
        ID: 1,
        Title: "Thai cuisine at its best",
        Description: "Loved this food from this super-licious restaurant",
        Vendor: "Jason_revamp_im2",
        VendorLink: "link",
        OwnerId: 4,
        ImageUrl: "image-1.jpg",
        Likes: 8,
        OwnerName: "Zoe",
        Hashtags: "#thai #foodlove",
      },
      {
        ID: 2,
        Title: "Mexicans is love",
        Description:
          "Too hungry for a snack but too early for dinner? I don’t face this dilemma anymore since I found this combo",
        Vendor: "147 Seafood Steamboat",
        VendorLink: "link",
        OwnerId: 4,
        ImageUrl: "image-2.jpg",
        Likes: 2,
        OwnerName: "James",
        Hashtags: "#mexican #combo #drink #fishislove",
      },
      {
        ID: 4,
        Title: "Yay Delicious",
        Description:
          "Alert! Finally found the best cure to hangovers - don’t think, just go for it and thank me later!”\n",
        Vendor: "La'pino",
        VendorLink: "link",
        OwnerId: 7,
        ImageUrl: "image-4.jpg",
        Likes: 0,
        OwnerName: "Antony",
        Hashtags: "#sgfdfancy #charwayteow",
      },
      {
        ID: 5,
        Title: "Food and Fun",
        Description:
          "Always there as messiah to deliver food even at late working hours",
        Vendor: "Ting restaurant next open time",
        VendorLink: "link",
        OwnerId: 4,
        ImageUrl: "image-5.jpg",
        Likes: 0,
        OwnerName: "Ling",
        Hashtags: "#foodislove #noodler #foodfever ",
      },
    ];
    dispatch({
      type: FETCH_POSTS,
      payload: posts,
      isLoading: false,
    });
  });
};

export const likePost = (id) => (dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 700);
  }).then(() => {
    dispatch({
      type: LIKE_POST,
      id: id,
      success: true,
    });
  });
};

export const unlikePost = () => (dispatch) => {
  console.log("liking");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 700);
  }).then(() => {
    dispatch({
      type: UNLIKE_POST,
      success: true,
    });
  });
};
