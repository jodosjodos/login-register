import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <button  onClick={handleSignUp}>Login</button>
        <button>Sign up</button>
      </div>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Value" />
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Value"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Value"
          />
        </div>
        <button>Let's go</button>
      </form>
      <p>or continue with </p>
      <div></div>
    </div>
  );
};
