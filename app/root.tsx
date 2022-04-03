import {
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
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex py-6 justify-between">
          <div>
            <h1 className="text-3xl">Nardus' Blog</h1>
          </div>
          <div className="">
            <ul className="flex px-5 flex-row justify-between">
              <li className="px-5">home</li>
              <li className="px-5">blog</li>
              <li className="px-5">about</li>
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
