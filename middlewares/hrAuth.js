import cookies from "next-cookies";
import jwt from "jsonwebtoken";

export function hrUnAuthPage(context) {
  return new Promise((resolve) => {
    const allCookies = cookies(context);

    if (allCookies.token) {
      // Decode the JWT token
      const decodedToken = jwt.decode(allCookies.token);

      // Check if the token exists and the userType is "hr"
      if (decodedToken && decodedToken.userType === "hr") {
        return context.res
          .writeHead(302, {
            location: "/hr/dashboard",
          })
          .end();
      }
    }
    return resolve("Unauthorized");
  });
}

export function hrAuthPage(context) {
  return new Promise((resolve) => {
    const allCookies = cookies(context);

    const decodedToken = jwt.decode(allCookies.token);

    if (!allCookies.token && decodedToken.userType !== "hr") {
      return context.res
        .writeHead(302, {
          location: "/hr/login",
        })
        .end();
    }

    // Check if the token exists and return it
    if (decodedToken && decodedToken.userType === "hr") {
      return resolve({
        token: allCookies.token,
      });
    } else {
      // If userType is not "user", redirect to login
      return context.res
        .writeHead(302, {
          location: "/hr/login",
        })
        .end();
    }
  });
}
