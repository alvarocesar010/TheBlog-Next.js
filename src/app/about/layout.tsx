export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Aqui é o outro layout</h1>
      {children}
    </>
  );
}
