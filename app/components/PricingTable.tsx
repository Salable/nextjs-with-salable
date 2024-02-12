"use client";
import { SalablePricingTableReact } from "@salable/react-sdk";

const PRODUCT_UUID = "63e2d1e9-f5b5-4847-aa76-b815bcb46b10";
const SALABLE_API_KEY = "live_a2d3efa987e88b8f0b21bdd25648dae850dacfec";

const PricingTable: React.FC<{ email: string }> = ({ email }) => {
  return (
    <SalablePricingTableReact
      envConfig={{
        productUuid: PRODUCT_UUID,
        apiKey: SALABLE_API_KEY,
        globalPlanOptions: {
          granteeId: email,
          successUrl: "http://localhost:3000/",
          cancelUrl: "https://localhost:3000/",
        },
        theme: "light",
      }}
      checkoutConfig={{
        member: email,
        customer: {
          email: email,
        },
      }}
    />
  );
};

export default PricingTable;
