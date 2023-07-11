'use client'
import { signIn } from 'next-auth/react'

const SignIn = () => <button onClick={() => signIn()}>Sign In</button>

export default SignIn
