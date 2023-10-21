import { useState } from "react";
import {
	LuMailX,
	LuMailCheck,
	LuInbox,
	LuMail,
	LuPlusSquare
} from "react-icons/lu";

type SideBarProps = {
	handleFilter: (filter: string) => void
}

export function SideBar({handleFilter} : SideBarProps) {

	function setHandleFilter(filter: string) {
		setFilter(filter)
		handleFilter(filter)
	}

	const [filter, setFilter] = useState('all')

	return (
		<aside className="py-10 ps-10 hidden md:block">
			<div>
				<ul>
					<li>
						<a
							onClick={() => setHandleFilter('all')}
							href="#"
							className={`flex gap-x-4 justify-start py-4 px-6 text-[#707070] rounded-md hover:bg-[#3383D3] hover:text-white hover:rounded-md ${filter === 'all' ? 'bg-[#3383D3] text-white' : ''}`}
						>
							<LuInbox className="w-6 h-6" />
							Todas
						</a>
					</li>
					<li>
						<a
							onClick={() => setHandleFilter('received')}
							href="#"
							className={`flex gap-x-4 justify-start py-4 px-6 text-[#707070] rounded-md hover:bg-[#3383D3] hover:text-white hover:rounded-md ${filter === 'received' ? 'bg-[#3383D3] text-white' : ''}`}
						>
							<LuMail className="w-6 h-6" />
							Recebidas
						</a>
					</li>
					<li>
						<a
							onClick={() => setHandleFilter('approved')}
							href="#"
							className={`flex gap-x-4 justify-start py-4 px-6 text-[#707070] rounded-md hover:bg-[#3383D3] hover:text-white hover:rounded-md ${filter === 'approved' ? 'bg-[#3383D3] text-white' : ''}`}
						>
							<LuMailCheck className="w-6 h-6" />
							Aprovadas
						</a>
					</li>
					<li>
						<a
							onClick={() => setHandleFilter('discarded')}
							href="#"
							className={`flex gap-x-4 justify-start py-4 px-6 text-[#707070] rounded-md hover:bg-[#3383D3] hover:text-white hover:rounded-md ${filter === 'discarded' ? 'bg-[#3383D3] text-white' : ''}`}
						>
							<LuMailX className="w-6 h-6" />
							Descartadas
						</a>
					</li>
				</ul>
			</div>

			<div>
				<ul>
					<li className="mb-0">
						<a
							onClick={() => setHandleFilter('discarded')}
							href="#"
							className={`flex gap-x-4 justify-start py-4 px-6 text-[#707070] rounded-md hover:bg-[#3383D3] hover:text-white hover:rounded-md ${filter === 'discarded' ? 'bg-[#3383D3] text-white' : ''}`}
						>
							<LuPlusSquare className="w-6 h-6" />
							Novo peixe
						</a>
					</li>
				</ul>
			</div>

		</aside>
	)
}