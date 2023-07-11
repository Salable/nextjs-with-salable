import { use } from 'react'
import { getServerSession } from 'next-auth/next'
import { Salable } from '@salable/node-sdk'
import SignIn from './components/SignIn'
import PricingTable from './components/PricingTable'

async function getLicensesForUser(username?: string | null) {
  const { licenses } = new Salable(process.env.SALABLE_API_KEY as string)
  if (!username) {
    return
  }

  try {
    const capabilitiesCheck = await licenses.check(process.env.SALABLE_PLAN_ID as string, [
      username,
    ])

    return capabilitiesCheck
  } catch (error) {
    return null
  }
}


export default function Home() {
  const data = use(getServerSession())
  const permissions = use(getLicensesForUser(data?.user?.email))

  const hasPermission = permissions?.capabilities.includes('SomeCapability')

  return (
    <main>
      <div>
        {data ? hasPermission ? (<h1>You are on the Pro plan!</h1>) : (
          <PricingTable email={data?.user?.email!} />
        )
          : (
            <SignIn />
          )}
      </div>
    </main>
  )
}
