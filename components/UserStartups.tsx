import { client } from '@/sanity/lib/client'
import { AUTHOR_STARTUPS_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import StartupCard, {StartupTypeCard} from './StartupCard'

const UserStartups = async ({id}: {id:string}) => {
    const startups = await client.fetch(AUTHOR_STARTUPS_QUERY, {id})
  return (
   <>
    {startups.length > 0 ? startups.map((startup: StartupTypeCard)=>(
        <StartupCard key={startup?._id} post={startup} />
    )):(
        <p className='no-results'>No post yet</p>
    )}
   </>
  )
}

export default UserStartups