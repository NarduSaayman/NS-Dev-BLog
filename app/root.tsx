import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "A Frontend Samurai's Dev Blog",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600">
        <div className="flex sticky top-0 justify-between rounded-b-3xl shadow-xl bg-gradient-to-bl from-green-100 via-blue-50 to-purple-50 z-10">
          <div className="m-auto">
            <ul className="flex px-5 flex-row justify-between">
              <Link
                to="blog"
                className="px-10 cursor-pointer
                bg-gradient-to-bl from-green-100 via-blue-50 to-purple-50
                hover:from-pink-400 hover:via-red-400 hover:to-yellow-400
                py-5 rounded-md h-full"
              >
                BLOG
              </Link>
              <Link
                to="/"
                className="px-10 cursor-pointer
              bg-gradient-to-b from-green-100 via-blue-50 to-purple-50
              hover:from-pink-400 hover:via-red-400 hover:to-yellow-400
              py-5 rounded-md h-full"
              >
                HOME
              </Link>
              <Link
                to="about"
                className="px-10 cursor-pointer
                bg-gradient-to-br from-green-100 via-blue-50 to-purple-50
                hover:from-pink-400 hover:via-red-400 hover:to-yellow-400
                py-5 rounded-md h-full"
              >
                ABOUT
              </Link>
            </ul>
          </div>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
