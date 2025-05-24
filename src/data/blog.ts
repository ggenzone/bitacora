export interface Menu {
    label: string;
    href: string;
    external?: boolean;
    badge?: string;
}

export interface Blog {
    title: string;
    description: string;
    image: string;
    menu: Menu[];
}