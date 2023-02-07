import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://60599a28-f89d-4b19-82a4-71e8c7f6cc22.mock.pstmn.io/",
});

export const getFlowers = (page: number = 1) => {
  api.get(`/list?page=${page}`).then((res) => res.data);
};

export const deleteFlower = (plantId: string) => {
  api.delete(`?id=${plantId}`).then((res) => res.data);
};
