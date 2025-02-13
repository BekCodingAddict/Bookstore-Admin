import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <section className="flex">
      <Sidebar />
      <Main />
    </section>
  );
}
