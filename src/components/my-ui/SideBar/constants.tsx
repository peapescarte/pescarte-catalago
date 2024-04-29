import { FishIcon, Inbox, LayoutDashboard, MapPinned } from "lucide-react";

export type SideBarItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideBarItem[];
};

export const SIDEBAR_ITENS: SideBarItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <LayoutDashboard />,
    submenu: false,
  },
  {
    title: 'Nomes Sugeridos',
    path: '/dashboard/suggestions',
    icon:  <Inbox />,
    submenu: false,
  },
  {
    title: 'Peixes',
    path: '/dashboard/fish',
    icon: <FishIcon />,
    submenu: true,
    subMenuItems: [
      { title: 'Todos', path: '/dashboard/fish' },
      { title: 'Novo Peixe', path: '/dashboard/fish/new' },
    ],
  },
  {
    title: 'Comunidades',
    path: '/dashboard/communities',
    icon: <MapPinned />,
    submenu: true,
    subMenuItems: [
      { title: 'Todos', path: '/dashboard/communities' },
      { title: 'Nova comunidade', path: '/dashboard/communities/new' },
    ],
  },
];