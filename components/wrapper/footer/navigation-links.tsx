interface NavigationLinksProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export function NavigationLinks({ title, links }: NavigationLinksProps) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-6">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm transition-colors hover:text-white"
              style={{ color: 'hsl(240, 5%, 64.9%)' }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
