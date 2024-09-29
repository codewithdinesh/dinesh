interface ContactItem {
    name: string;
    text: string;
    link: string;
    icon: React.ReactNode;
}

interface ContactCardProps {
    contact: ContactItem
}

interface ContactSectionProps {
    contacts: ContactItem[]
}
