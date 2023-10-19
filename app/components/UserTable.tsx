'use client'

import { useState, useMemo } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination
} from '@nextui-org/react'
import { User, columns, renderCell } from '../users/columns'

export default function UserTable({ users }: { users: User[] }) {
  const [page, setPage] = useState(1)
  const rowsPerPage = 10

  const pages = Math.ceil(users.length / rowsPerPage)

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return users.slice(start, end)
  }, [page, users])

  return (
    <Table
      aria-label='Example table with dynamic content'
      bottomContentPlacement='outside'
      bottomContent={
        <div className='flex w-full justify-center'>
          <Pagination
            isCompact
            showControls
            showShadow
            color='secondary'
            page={page}
            total={pages}
            onChange={page => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: 'min-h-[222px]'
      }}
    >
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items} emptyContent={'Мэдээлэл олдсонгүй.'}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
