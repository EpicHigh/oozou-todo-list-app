import { PlusIcon } from '@heroicons/react/outline'
import React, { MouseEventHandler, VFC } from 'react'

interface EmptyProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Empty: VFC<EmptyProps> = (props) => {
  const { onClick } = props

  return (
    <button
      className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      data-testid="create-todo-button"
      type="button"
      onClick={onClick}
    >
      <PlusIcon className="mx-auto h-12 w-12 text-gray-400" />
      <span className="mt-2 block text-sm font-medium text-gray-900">
        Please create a new todo
      </span>
    </button>
  )
}

export default Empty
