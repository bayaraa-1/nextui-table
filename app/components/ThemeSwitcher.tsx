'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from '@nextui-org/react'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='flex gap-4'>
      <Link href='/users'>
        <Button size='md' variant='flat'>
          Users
        </Button>
      </Link>
      <Link href='/users1'>
        <Button size='md' variant='flat'>
          Users1
        </Button>
      </Link>
      <Dropdown>
        <DropdownTrigger>
          <Button variant='bordered'>{theme}</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label='Static Actions'>
          <DropdownItem key='light' onClick={() => setTheme('light')}>
            Light
          </DropdownItem>
          <DropdownItem key='dark' onClick={() => setTheme('dark')}>
            Dark
          </DropdownItem>
          <DropdownItem key='modern' onClick={() => setTheme('modern')}>
            Modern
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
