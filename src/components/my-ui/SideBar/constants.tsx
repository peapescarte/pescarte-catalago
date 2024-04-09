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
    path: '/admin',
    icon: <LayoutDashboard />,
    submenu: false,
  },
  {
    title: 'Nomes Sugeridos',
    path: '/admin/suggestions',
    icon:  <Inbox />,
    submenu: false,
  },
  {
    title: 'Peixes',
    path: '/admin/fish',
    icon: <FishIcon />,
    submenu: true,
    subMenuItems: [
      { title: 'Todos', path: '/admin/fish' },
      { title: 'Novo Peixe', path: '/admin/fish/new' },
    ],
  },
  {
    title: 'Comunidades',
    path: '/admin/communities',
    icon: <MapPinned />,
    submenu: true,
    subMenuItems: [
      { title: 'Todos', path: '/admin/communities' },
      { title: 'Nova comunidade', path: '/admin/communities/new' },
    ],
  },
];