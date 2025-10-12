/* eslint-disable @stylistic/js/indent */
import { http, HttpResponse, HttpMethods } from "msw";
import { API_URL } from "../../config/constants.js";

// Получает результат ответа MSW

function getResponseMock({ type, resp, data, endpoint }) {
  if (!endpoint) {
    throw new Error("Missing endpoint for getResponseMock");
  }

  const url = `${API_URL}/${endpoint}`;
  const method = type || "GET";
  const resolver = () => {
    const body = !!resp
      ? resp
      : {
          isSuccess: true,
          data,
        };
    return HttpResponse.json(body);
  };
  switch (method) {
    case HttpMethods.POST:
      return http.post(url, resolver);
    case HttpMethods.DELETE:
      return http.delete(url, resolver);
    case HttpMethods.PUT:
      return http.put(url, resolver);
    default:
      return http.get(url, resolver);
  }
}

export { getResponseMock };
