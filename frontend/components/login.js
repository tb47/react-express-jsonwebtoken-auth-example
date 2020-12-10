import axios from "axios";
export const Login = () => {
  const doLogin = () => {
    const request = {
      method: "POST",
      url: "http://localhost:5000/login",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "text",
    };
    axios(request)
      .then((res) => {
        window.localStorage.setItem("testToken", res.data.testToken);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  const doLogout = () => {
    window.localStorage.removeItem("testToken");
    window.location.reload();
  };
  return (
    <div>
      <button onClick={doLogin}>Do Login</button>
      <button onClick={doLogout}>Do Logout</button>
    </div>
  );
};
