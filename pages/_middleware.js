import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

export const middleware = async (req) => {
  const tokensession = req.cookies["tokensession"];

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (tokensession === undefined) {
      return NextResponse.next();
    }
    try {
      const { payload } = await jwtVerify(
        tokensession,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
      console.log(payload);
      return NextResponse.redirect(new URL(`/${payload.usertype}`, req.url));
    } catch (error) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/paciente")) {
    if (tokensession === undefined) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    try {
      const { payload } = await jwtVerify(
        tokensession,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
      console.log(payload);
      if (payload.usertype === "medico") {
        return NextResponse.redirect(new URL(`/${payload.usertype}`, req.url));
      }
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/medico")) {
    if (tokensession === undefined) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    try {
      const { payload } = await jwtVerify(
        tokensession,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
      console.log(payload);
      if(payload.usertype === 'paciente') {
        return NextResponse.redirect(new URL(`/${payload.usertype}`, req.url));
      }
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", req.url));
    }    
  }
};
