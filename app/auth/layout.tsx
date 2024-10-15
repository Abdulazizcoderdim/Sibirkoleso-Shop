export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-5xl mx-auto h-screen items-center justify-center flex">
      {children}
    </div>
  );
}
