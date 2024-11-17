import React from "react";
import AddDesireDialog from "./_components/addnewdesire-dialog";
import { createClient } from "@/utils/supabase/server";
import DesireCard from "./_components/DesireCard";

const page = async () => {
  const supabase = await createClient();
  const { data: desires, error } = await supabase.from("desires").select("*");

  return (
    <section className="flex flex-col space-y-5 lg:space-y-8">
      <div className="flex items-start justify-between">
        <h1>My desires</h1>
        <AddDesireDialog />
      </div>
      <div className="space-y-4">
        {desires ? (
          desires.map((desire) => <DesireCard key={desire.id} desire={desire} />)
        ) : (
          <>
            <p>No desires found</p>
            <div className="flex items-center spaxe-x-3">
              <p>Add your first desire</p>
              <AddDesireDialog />
            </div>
          </>
        )}
        {error && <p>Error fetching desires: {error.message}</p>}
      </div>
    </section>
  );
};

export default page;
