import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh" }}><div className="wrap">
      <p className="eyebrow">404</p><h1>Page not found</h1>
      <p className="lead">The page you are looking for doesn&apos;t exist.</p>
      <p style={{ marginTop: "1.5rem" }}><Link className="btn btn-gold" href="/">Back to home</Link></p>
    </div></section>
  );
}
