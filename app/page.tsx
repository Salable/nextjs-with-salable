import { use } from "react";
import { getServerSession } from "next-auth/next";
import { Salable } from "@salable/node-sdk";
import SignIn from "./components/SignIn";
import PricingTable from "./components/PricingTable";
import Counter from "./components/Counter";
import SignOut from "./components/SignOut";

async function getLicensesForUser(username?: string | null) {
  const { licenses } = new Salable(process.env.SALABLE_API_KEY as string);
  if (!username) {
    return;
  }

  try {
    const capabilitiesCheck = await licenses.check(
      process.env.SALABLE_PLAN_ID as string,
      [username],
    );

    return capabilitiesCheck;
  } catch (error) {
    return null;
  }
}

export default function Home() {
  const data = use(getServerSession());
  const permissions = use(getLicensesForUser(data?.user?.email));

  const canSeeCounter = permissions?.capabilities.includes("Counter");

  return (
    <main className="h-full">
      <div className="h-full flex justify-center items-center">
        {data ? (
          canSeeCounter ? (
            <>
              <Counter />
              <SignOut />
            </>
          ) : (
            <PricingTable email={data?.user?.email!} />
          )
        ) : (
          <SignIn />
        )}
      </div>
    </main>
  );
}
