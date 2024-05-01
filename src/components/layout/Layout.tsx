import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <>
      <Header />
      <main className="w-full h-[100svh] my-1 py-2 flex flex-col items-center gap-3 bg-neutral text-neutral-content">
        <div
          id="main-content"
          className="w-[125svh] h-full mb-5 flex flex-col flex-wrap items-center gap-1"
        >
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
