import FormSignIn from "../../components/FormSignIn/FormSignIn";
import "./signIn.css";
import CircleUserIcon from "../../../public/assets/CircleUserIcon";

const SignIn = () => {
  return (
    <div className="main-container">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <CircleUserIcon />
          <h1>Sign In</h1>
          <FormSignIn />
        </section>
      </main>
    </div>
  );
};

export default SignIn;