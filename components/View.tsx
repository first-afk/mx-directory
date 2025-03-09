import React from 'react'
import Ping from './Ping'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import { writeclient } from '@/sanity/lib/write-client'
import {after} from 'next/server'

const View = async ({id}: {id: string}) => {
    const {views: totalViews} = await client.withConfig({useCdn: false}).fetch(STARTUP_VIEWS_QUERY, {id})

    after(async () => await writeclient.patch(id).set({views: totalViews + 1}).commit())

  return <div className='view-container'>
    <div className='absolute -top-2 -right-2'>
        <Ping />
    </div>
    <p className="view-text">
        <span className='font-black'>{totalViews} view</span>
        {/* (format number) to check if views is singular or plural */}
    </p>
  </div>
}

export default View