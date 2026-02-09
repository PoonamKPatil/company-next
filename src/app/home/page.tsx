import HomePage from '@/components/home/HomePage'
import { getServices, getSiteSettings } from '@/lib/strapi'
import React from 'react'


export default async function Page() {
    const siteSettings = await getSiteSettings()

    return  <HomePage siteSettings={siteSettings} services={siteSettings.services}/>
}
