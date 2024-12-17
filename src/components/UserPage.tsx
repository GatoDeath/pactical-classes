import { useState } from "react";
import useUser from "../hooks/useUser";
import UserRow from "./UserRow";

export default function UserPage() {
  const [page, setPage] = useState(1);
  const { users, totalPages } = useUser(page);

  return (
    <>
      <h3 className="uppercase bold">Usuarios (Página {page})</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div className="flex gap-32 mt-2 mb-5">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-red-500 text-white rounded p-1"
        >
          Anterior
        </button>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="bg-blue-500 text-white rounded p-1"
        >
          Siguiente
        </button>
      </div>
    </>
  );
}
