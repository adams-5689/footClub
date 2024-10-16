import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
export default function Sidebar({Children}){
    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pd-2 flex justify-between item-center">
                    <img src="./src/assets/logoMagicClub.jpg" className="w-10" alt="" />
                    <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <ChevronFirst/>
                    </button>

                </div>

                <ul className="flex-1 px-3">{Children}</ul>

                <div className="border-t flex p-3">
                    <img src="https://ui-avatars.com/api/?name=Adama+Coulibaly" alt="" 
                    className="w-10 h-10 rounded-nd"
                    />

                    <div className={'flex justify-between items-center w-52'}>
                        <div className="leading-4">
                            <h4 className="font-semibold">Coulibaly Adama</h4>
                            <span className="text-xs text-gray-600">adamacoulibaly@gmail.com</span>
                        </div>
                        <MoreVertical size={20}/>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export function SidebarItem({icon, text, active, alert }){
    return (
        <li>
            {icon}
            <span>{text}</span>
        </li>
    )
}