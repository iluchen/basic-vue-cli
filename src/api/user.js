import axios from "@/libs/api.request";
import { Base64 } from "js-base64";
import md5 from "crypto-js/md5";
import hmacsha1 from "crypto-js/hmac-sha1";

let date = new Date().getTime();
let stringToString = `POST\n${date}\n/h5/user/login`;

export const login = ({ userName, password }) => {
  const sign = Base64.encode(
    hmacsha1(stringToString, md5(password).toString()).toString()
  );
  return axios.request({
    url: `/user/h5/login/${userName}`,
    method: "post",
    headers: {
      Authorization: sign,
      Time: date
    }
  });
};
