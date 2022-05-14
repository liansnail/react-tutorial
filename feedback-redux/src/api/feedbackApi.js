import AxiosInstance from "./http-common";

const feedbackApi = { addFeedback, deleteFeedback, getFeedbacks };

function getFeedbacks() {
  return AxiosInstance.get("/feedbacks");
}

function addFeedback(feedback) {
  return AxiosInstance({
    url: "/feedbacks",
    method: "POST",
    data: feedback,
  });
}

function deleteFeedback(id) {
  return AxiosInstance({
    url: `/feedbacks/${id}`,
    method: "DELETE",
  });
}

export default feedbackApi;
