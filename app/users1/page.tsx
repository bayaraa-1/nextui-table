import React from 'react'
import { User } from '../users/columns'
import UserTable1 from '../components/UserTable1'

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  const data = await res.json()
  return data
}

export default async function Users() {
  const users = await getUsers()
  return (
    <section className='py-12'>
      <div className='container'>
        <h1 className='mb-8 text-3xl font-bold'>Users Table 1</h1>
        <UserTable1 users={users} />
      </div>
    </section>
  )
}
