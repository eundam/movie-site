import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "react-router";

import type { ReactNode } from "react";
import "./app.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="bg-gray-950 text-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-gray-900 px-10 py-5 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          🎬 MovieZone
        </Link>

        <nav className="flex gap-8">
          <Link to="/" className="hover:text-yellow-400">
            홈
          </Link>

          <Link to="/movies" className="hover:text-yellow-400">
            영화 목록
          </Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <Outlet />
      </main>
    </div>
  );
}