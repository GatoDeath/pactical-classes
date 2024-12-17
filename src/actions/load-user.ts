import axios from "axios";
import { ResUserList } from "../models/UserList";

export const loadUserAction = async (page: number) => {
  const { data } = await axios.get<ResUserList>(
    `https://reqres.in/api/users?page=${page}`
  );
  return { users: data.data, totalPages: data.total_pages };
};
