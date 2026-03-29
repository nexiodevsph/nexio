export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-slate-900 text-white">
      {children}
    </section>
  );
}
