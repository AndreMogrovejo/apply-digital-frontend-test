import Navbar from "@/components/organisms/Navbar";
import ShoppingCartGameList from "@/components/organisms/ShoppingCartGameList";

export default async function Cart() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Navbar showBack title="Your cart" />
      <section className="my-12 flex flex-col gap-8  px-[6%]">
        <ShoppingCartGameList />
      </section>
    </main>
  );
}
