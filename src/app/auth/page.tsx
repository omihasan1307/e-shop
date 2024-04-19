import { Metadata } from "next";
import LoginPage from "./Login";

export const metadata: Metadata = {
  title: "Login / E-Shop",
  description: "E-Shop",
};


const Login = () => {
  return (
    <div>
    <LoginPage/>
    </div>
  );
};

export default Login;
