import { LIVE_CREATE_LEAD, STAGING_POST_API } from "../../config/ServerKey";

const postApi = async (body) => {
 await fetch(STAGING_POST_API+LIVE_CREATE_LEAD, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((result) => {
    result.json().then((resp) => {
    });
  });
};

export { postApi };
