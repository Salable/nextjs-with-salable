# Salable Next.js Starter

Hi 👋 This project is the simplest way to get started with Salable in a Next.js
project. If you want to know more about Salable, check out the following:

* [Documentation](https://docs.salable.app/)
* [Website](https://www.salable.app/)

The template is provided as a perfect "leap off" point to create your own Next
application with Salable. There is basic code in place to integrate the
pricing table, accept payment, and authorise based on the user's license
capabilities.

### What is included?

* Authentication 🔒 provided by [Auth.js](https://authjs.dev/)
(formerly NextAuth).
  * By default we have set up the `GithubProvider` but you can use any of the
  [supported providers](https://next-auth.js.org/providers/).
* [Prisma] ORM (w/ the associated Auth.js adapter).
* TailwindCSS for styling 💅
* ESLint.

### Getting Started

1. Clone this repository.
1. `cp .env.example .env`.
1. Fill in the `.env` file.
1. Fill in the constants in `app/components/PricingTable.tsx`.
1. Build something great.