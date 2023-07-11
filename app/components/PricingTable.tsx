'use client'
import { SalablePricingTableReact } from '@salable/react-sdk'

const PRODUCT_UUID = 'your-product-uuid'
const SALABLE_API_KEY = 'your-salable-api-key'

const PricingTable: React.FC<{ email: string }> = ({ email }) => {
  return (
    <SalablePricingTableReact
      envConfig={{
        productUuid: PRODUCT_UUID,
        apiKey: SALABLE_API_KEY,
        globalPlanOptions: {
          granteeId: email,
          successUrl: 'http://localhost:3000/',
          cancelUrl: 'https://localhost:3000/'
        },
        theme: 'light'
      }}
      checkoutConfig={{
        member: email,
        customer: {
          email: email,
        }
      }}
    />

  )
}

export default PricingTable
