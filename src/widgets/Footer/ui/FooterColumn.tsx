interface MenuItem {
  id: string;
  label: string;
}
interface FooterColumnProps {
  menu: MenuItem[];
}

const FooterColumn = ({ menu }: FooterColumnProps) => {
  return (
    <nav>
      <ul className="space-y-2">
        {menu.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block whitespace-nowrap hover:underline"
            >
              {' '}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterColumn;
