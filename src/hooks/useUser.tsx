import { useEffect, useState } from "react";
import { User } from "../models/UserList";
import { loadUserAction } from "../actions/load-user";

export default function useUser(page: number) {
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadUserAction(page).then(({ users, totalPages }) => {
      setUsers(users);
      setTotalPages(totalPages);
    });
  }, [page]);

  return { users, totalPages };
}
