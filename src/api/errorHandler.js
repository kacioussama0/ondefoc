export function handleApiError(error) {
  if (error.response) {
    console.error("API Error:", error.response.data);
    return error.response.data;
  }
  if (error.request) {
    console.error("No Server Response");
    return { message: "No response from server" };
  }
  return { message: error.message };
}
