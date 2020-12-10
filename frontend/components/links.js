import axios from "axios";
export const Links = () => {
  let reqAuthToken;
  const unprotectedRouteRequested = async (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("testToken")) {
      reqAuthToken = window.localStorage.getItem("testToken").split(",")[0];
    }
    const request = {
      method: "GET",
      url: "http://localhost:5000/unprotected",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + reqAuthToken,
      },
      responseType: "text",
    };
    await axios(request)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  const protectedRouteRequested = async (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("testToken")) {
      reqAuthToken = window.localStorage.getItem("testToken").split(",")[0];
    }
    const request = {
      method: "GET",
      url: "http://localhost:5000/protected",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + reqAuthToken,
      },
      responseType: "text",
    };
    await axios(request)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1 onClick={unprotectedRouteRequested}>Unprotected Route</h1>
      <h1 onClick={protectedRouteRequested}>Protected Route</h1>
    </div>
  );
};
