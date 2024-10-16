
import Sidebar, { SidebarItem } from './components/sidebar';
import './App.css';
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings
} from "lucide-react"
import React from 'react';
function App() {

  return (
    <>
    <Sidebar>
      <SidebarItem icon={<BarChart3 size={20} />} text="Dashboard" alert/>
      <SidebarItem icon={<UserCircle size={20} />} text="User" />
      <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
      <SidebarItem icon={<Package size={20} />} text="Orders" alert />
      <SidebarItem icon={<Receipt size={20} />} text="Billings" alert />
      <hr className='my-3'/>
      <SidebarItem icon={<Settings size={20} />} text="Settings" alert />
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help" alert />

    </Sidebar>
    </>
  )
}

export default App
