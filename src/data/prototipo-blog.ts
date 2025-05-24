import { type Blog } from "./blog";

export const blog: Blog = {
    title: "Prototipo",
    description: "Descripcion",
    image: "/bitacora/prototipo/prototipo.png",
    menu: [
      {
        label: "Home",
        href: "/bitacora/prototipo",
      },
      {
          label: "Microcontroladores",
          href: "/bitacora/prototipo/microcontroladores",
      },
      {
        label: "Inventario",
        href: "/bitacora/prototipo/inventario",
      },
      {
        label: "Recursos",
        href: "/bitacora/prototipo/recursos",
      },
    ]
};
