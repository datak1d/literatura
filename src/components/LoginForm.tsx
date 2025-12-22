import { useState } from "react";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [userRole, setUserRole] = useState("User");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  const handlePassword = (e) = {
    // password must be 6 symbols minimum
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={s.inputField}>
          <label htmlFor="username" className={s.block}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            required
            value={credentials.userName}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, userName: e.target.value }))
            }
            className={s.input}
          />
        </div>
        <div className={s.inputField}>
          <label htmlFor="password" className={s.block}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, password: e.target.value }))
            }
            className={s.input}
          />
        </div>

        <div className={s.inputField}>
          <label className={s.block}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />{" "}
            Remember me
          </label>
        </div>

        <div className={s.inputField}>
          <label htmlFor="role" className={s.block}>
            Role:
          </label>
          <select
            className={s.input}
            id="role"
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option>User</option>
            <option>Admin</option>
          </select>
        </div>

        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 px-2 py-1"
        />
      </form>
    </div>
  );
};

export default LoginForm;
