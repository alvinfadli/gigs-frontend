import cookies from "next-cookies";
export function unAuthPage(context) {
  return new Promise((resolve) => {
    const allCookies = cookies(context);

    // console.log(allCookies.token);
    if (allCookies.token) {
      return context.res
        .writeHead(302, {
          location: "/user/jobs",
        })
        .end();
    }
    return resolve("Unauthorized");
  });
}

export function authPage(context) {
  return new Promise((resolve) => {
    const allCookies = cookies(context);

    // console.log(allCookies.token);
    if (!allCookies.token) {
      return context.res
        .writeHead(302, {
          location: "/user",
        })
        .end();
    }
    return resolve({
      token: allCookies.token,
    });
  });
}
