import { NextResponse } from "next/server";

export async function middleware(request) {
  const url = request.nextUrl;
  const cookies = request.cookies;
  let lang = cookies.get("lang")?.value;
  const token = cookies.get("auth_token")?.value; // Проверяем, есть ли auth_token

  console.log("Middleware auth_token:", token || "Нет auth_token");

  // Пропускаем системные файлы, API-запросы и маршруты авторизации
  if (
    url.pathname.startsWith("/_next/") ||
    url.pathname.startsWith("/api/") ||
    url.pathname.startsWith("/favicon.ico") ||
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/auth") ||
    url.pathname.startsWith("/static/") ||
    url.pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|otf|mp4|webm|mp3|wav|ogg)$/)
  ) {
    return NextResponse.next();
  }

  // Устанавливаем язык, если он не задан
  if (!lang) {
    const acceptLanguage = request.headers.get("accept-language") || "uk";
    lang = acceptLanguage.startsWith("en") ? "en" : "ua";

    const response = NextResponse.next();
    response.cookies.set("lang", lang, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  // Перенаправление английских маршрутов
  const isEnglish = lang === "en";
  const isAlreadyEnglishRoute = url.pathname.startsWith("/en");
  const baseRoutes = ["/", "/guides", "/about", "/questions"];
  const shouldHaveEnPrefix = baseRoutes.some((route) => url.pathname.startsWith(route));

  if (!isEnglish && isAlreadyEnglishRoute) {
    return NextResponse.redirect(new URL(url.pathname.replace(/^\/en/, ""), request.url));
  }

  if (isEnglish && shouldHaveEnPrefix && !isAlreadyEnglishRoute) {
    return NextResponse.redirect(new URL(`/en${url.pathname}`, request.url));
  }

  // 🔒 Защита маршрута /dashboard
  if (url.pathname === "/dashboard" && !token) {
    console.warn("⛔ Нет auth_token! Перенаправляем на /auth...");
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

// Применяем middleware ко всем маршрутам
export const config = {
  matcher: ["/:path*"],
};
