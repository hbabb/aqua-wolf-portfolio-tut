import { unstable_noStore as noStore } from "next/cache";


export default function Home() {
  noStore();

  return (
    <main className="bg-transparent">
      <h1>Heath Babb Portfolio</h1>
    </main>
  );
}
