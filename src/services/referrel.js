import { axiosInstance } from "../constant"

export const sendRefer = async (data) => {
  try {
    const sendRefUrl = "/api/ref";
    const response = await axiosInstance.post(sendRefUrl, data);
    // console.log(response, 'create store')
    if (response?.data?.success) {
      return { success: response?.data?.success }
    }
    return { error: response?.data?.error || "Something went wrong" };
  } catch (error) {
    console.log(error?.response?.data?.error, " :Error during create store");
    return { error: error?.response?.data?.error || "Something went wrong" };
  }
}