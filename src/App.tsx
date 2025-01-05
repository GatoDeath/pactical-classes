// import BasicTypescript from "./typescript/BasicTypescript";
// import BasicFuntions from "./typescript/BasicFuntions";
// import ObjectsLiterals from "./typescript/ObjectsLiterals";
// import Counter from "./components/Counter";
// import LoginPage from "./components/LoginPage";
// import UserPage from "./components/UserPage";

import FormPage from "./components/FormPage";
import { AuthProvider } from "./contex/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        {/* <BasicTypescript /> */}
        {/* <ObjectsLiterals /> */}
        {/* <BasicFuntions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UserPage/> */}
        <FormPage/>


      </div>
    </AuthProvider>
  );
}

export default App;
