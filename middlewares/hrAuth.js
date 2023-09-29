import cookies from "next-cookies";
export function hrUnAuthPage(context) {
  return new Promise((resolve) => {
    const allCookies = cookies(context);

    // console.log(allCookies.token);
    if (allCookies.token) {
      return context.res
        .writeHead(302, {
          location: "/hr/dashboard",
        })
        .end();
    }
    return resolve("Unauthorized");
  });
}

export function hrAuthPage(context) {
  return new Promise((resolve) => {
    const allCookies = cookies(context);

    // console.log(allCookies.token);
    if (!allCookies.token) {
      return context.res
        .writeHead(302, {
          location: "/hr/login",
        })
        .end();
    }
    return resolve({
      token: allCookies.token,
    });
  });
}
