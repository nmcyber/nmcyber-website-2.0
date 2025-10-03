interface NavigationLinksProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export function NavigationLinks({ title, links }: NavigationLinksProps) {
  return (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-6">{title}</h4>
        <div className="mt-1 h-[3px] w-16 bg-accent rounded-full" />
      </div>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={`${title}-${link.label}-${index}`}>
            <a
              href={link.href}
              className="text-sm text-muted-foreground hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
