import Hero from "@/components/hero";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Imagemaker</h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam reiciendis aliquid
        blanditiis aspernatur dolores a totam amet, inventore quo corrupti minus libero atque
        nesciunt similique, excepturi debitis, dolorem sunt sit!
      </main>
    </>
  );
}
