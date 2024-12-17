import { User } from "../models/UserList";

interface Props {
  user: User;
}

export default function UserRow({ user }: Props) {
  return (
    <>
      <tr key={user.id}>
        <td>
          <img src={user.avatar} width="75" />
        </td>
        <td>
          <span className="ml-4">
            {user.first_name} {user.last_name}
          </span>{" "}
        </td>
        <td>
          {" "}
          <span className="ml-4">{user.email}</span>
        </td>
      </tr>
    </>
  );
}
