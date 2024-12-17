import { useAuthContext } from "../contex/AuthContext";

export default function LoginPage() {
  const { state, logingEmailWithPassword, logout } = useAuthContext();

  console.log(state);

  if (state === 1) {
    return (
      <>
        <h3>Tu estas logeado</h3>
        <button
          onClick={logout}
          className="bg-red-500 text-white rounded-2xl mt-2 p-5"
        >
          Exit
        </button>
      </>
    );
  }
  return (
    <>
      <h1>BIENVENIDO</h1>
      <h3>Ingresar</h3>
      <button
        onClick={() => logingEmailWithPassword("deymian@gmail.com", "1234")}
        className="bg-blue-500 text-white rounded-2xl mt-2 p-5 "
      >
        Login
      </button>
    </>
  );
}
