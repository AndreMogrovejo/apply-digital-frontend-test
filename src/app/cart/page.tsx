import Navbar from "@/components/organisms/Navbar";
import OrderSummary from "@/components/organisms/OrderSummary";
import ShoppingCartGameList from "@/components/organisms/ShoppingCartGameList";

export default async function Cart() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar showBack title="Your cart" showCartItems />
      <section className="w-full my-12 flex flex-col sm:flex-row gap-8 lg:px-[6%] items-center sm:items-start justify-between">
        <ShoppingCartGameList />
        <OrderSummary />
      </section>
    </main>
  );
}
