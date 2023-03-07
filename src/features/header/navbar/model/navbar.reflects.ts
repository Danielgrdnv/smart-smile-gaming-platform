import { reflect } from '@effector/reflect';
import { Navbar } from '../ui/navbar';

export const NavbarReflect = reflect({
  view: Navbar,
  bind: {
    // openModal: changeNavbarMenuTypeEvent,
    // activeMenuType: $navbarMenuType,
  },
});
