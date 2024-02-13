'use client'

import { ReactNode } from 'react'
import { RoomProvider } from '@/liveblocks.config'
import { ClientSideSuspense } from '@liveblocks/react'

type RoomProms = {
  children: ReactNode
  roomId: string
  fallback: NonNullable<ReactNode> | null
}

export const Room = ({ children, roomId, fallback }: RoomProms) => {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  )
}
