import HomeHeader from "./_components/header";
import HomeFooter from "./_components/footer";

export default function HomepageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <HomeHeader />
        <div className="w-full">{children}</div>
        <HomeFooter />
      </div>
    </main>
  );
}
