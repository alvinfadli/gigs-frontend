import cookies from "next-cookies";
import jwt from "jsonwebtoken";

export function unAuthPage(context) {
  return new Promise((resolve) => {
    const allCookies = cookies(context);

    if (allCookies.token) {
      // Decode the JWT token
      const decodedToken = jwt.decode(allCookies.token);

      // Check if the token exists and the userType is "user"
      if (decodedToken && decodedToken.userType === "user") {
        return context.res
          .writeHead(302, {
            location: "/user/jobs",
          })
          .end();
      }
    }
    return resolve("Unauthorized");
  });
}

export function authPage(context) {
  return new Promise((resolve) => {
    const allCookies = cookies(context);

    if (!allCookies.token) {
      return context.res
        .writeHead(302, {
          location: "/user/login",
        })
        .end();
    }

    // Decode the JWT token
    const decodedToken = jwt.decode(allCookies.token);

    // Check if the token exists and return it
    if (decodedToken && decodedToken.userType === "user") {
      return resolve({
        token: allCookies.token,
      });
    } else {
      // If userType is not "user", redirect to login
      return context.res
        .writeHead(302, {
          location: "/user/login",
        })
        .end();
    }
  });
}
