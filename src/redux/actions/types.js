export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const LIKE_POST = "LIKE_POST";

export const FETCH_MERCHANT = "FETCH_MERCHANT";

const backofficeEndpoint = "http://0.0.0.0:8080/backoffice";
export const FETCH_POSTS_ENDPOINT =
  backofficeEndpoint +
  "/v1/feed?msg_id=7a7e3ef0b7ad11e9b1bc310b8bd5424e&pax_id=93586858";
