import React from 'react'
import { Header } from '../../components/Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

export const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Header />
        <Sidebar />
        <main className='layout__main overflow-auto'>
          {children}
        </main>
    </div>
  )
}