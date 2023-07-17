import axios, { AxiosResponse } from "axios";

export async function loginRequest(data: {
  username: string;
  password: string;
}): Promise<AxiosResponse<any>> {
  return await axios({
    method: 'post',
    url: `${import.meta.env.VITE_DEV_BASE_URL}/auth/login`,
    data: data
  });
}
export async function signupRequest(data: {
  username: string;
  email: string;
  password: string;
}): Promise<AxiosResponse<any>> {
  return await axios({
    method: 'post',
    url: `${import.meta.env.VITE_DEV_BASE_URL}/auth/register`,
    data: data
  });
}
