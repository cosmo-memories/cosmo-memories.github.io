export type ProjectLink = {
    label: string;
    href: string;
};
  
export type ProjectCardProps = {
    title: string;
    description: string;
    links?: ProjectLink[];
    note?: string;
};
  