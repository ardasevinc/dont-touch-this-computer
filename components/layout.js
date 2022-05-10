import Meta from "./meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="h-screen bg-slate-900">
        <main className="h-screen">{children}</main>
      </div>
    </>
  );
}
