import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — XQORA Technologies" },
      {
        name: "description",
        content: "Explore software products and solutions by XQORA Technologies.",
      },
      { property: "og:title", content: "Products — XQORA Technologies" },
      {
        property: "og:description",
        content: "Explore software products and solutions by XQORA Technologies.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <section className="flex min-h-[calc(100vh-16rem)] items-center justify-center px-4 py-20">
      <div className="container-page text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Coming Soon
        </h1>
      </div>
    </section>
  );
}
