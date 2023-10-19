import { User, Tooltip, Chip, ChipProps } from '@nextui-org/react'
import { EyeIcon } from '../components/icons/EyeIcon'
import { EditIcon } from '../components/icons/EditIcon'
import { DeleteIcon } from '../components/icons/DeleteIcon'

export type User = {
  id: string
  name: string
  email: string
  image: string
  lastSeen: string
  status: string
}

const statusColorMap: Record<string, ChipProps['color']> = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning'
}

export const statusOptions = [
  { label: 'Active', key: 'active' },
  { label: 'Paused', key: 'paused' },
  { label: 'Vacation', key: 'vacation' }
]

export const columns = [
  {
    key: 'id',
    label: 'ID',
    sortable: true
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true
  },
  {
    key: 'lastSeen',
    label: 'Last Seen',
    sortable: true
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true
  },
  {
    key: 'actions',
    label: 'Actions'
  }
]

export const renderCell = (user: User, columnKey: React.Key) => {
  const cellValue = user[columnKey as keyof User]

  switch (columnKey) {
    case 'name':
      return (
        <User
          avatarProps={{ radius: 'lg', src: user.image }}
          description={user.email}
          name={cellValue}
        >
          {user.email}
        </User>
      )
    case 'lastSeen':
      return <span>{new Date(cellValue).toLocaleDateString()}</span>
    case 'status':
      return (
        <Chip
          className='capitalize'
          color={statusColorMap[user.status]}
          size='sm'
          variant='flat'
        >
          {cellValue}
        </Chip>
      )
    case 'actions':
      return (
        <div className='relative flex items-center gap-4'>
          <Tooltip content='Details'>
            <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
              <EyeIcon />
            </span>
          </Tooltip>
          <Tooltip content='Edit user'>
            <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color='danger' content='Delete user'>
            <span className='cursor-pointer text-lg text-danger active:opacity-50'>
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      )
    default:
      return cellValue
  }
}
