import { MenuItem } from "./MenuItem";
import { SIDEBAR_ITENS } from "./constants";

export function SideBar() {
	return (
    <aside className="py-10 w-80 ps-4 border-r border-zinc-100 hidden md:block">
      <div className="flex flex-col space-y-6 w-full">
        <div className="flex flex-col space-y-2 md:px-6 ">
          {SIDEBAR_ITENS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </aside>
  );
}