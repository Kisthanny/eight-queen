import customAxios from "@/plugins/axios/customAxios";

const post = customAxios.post;

export function qryAppList(payload) {
  return post("qryAppList", payload);
}

export function qryUserInfo(payload) {
  return post("qryUserInfo", payload);
}
