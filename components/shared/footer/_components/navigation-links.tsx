interface NavigationLinksProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export function NavigationLinks({ title, links }: NavigationLinksProps) {
  return (
    <div>
      <div className="mb-6">
        <span className="text-xl  font-semibold text-white lg:sm:text-nowrap mb-4 sm:text-2xl leading-tight font-plus-jakarta-sans">
          {title}
        </span>
        <div className="mt-1 h-[3px] w-16 bg-accent rounded-full" />
      </div>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={`${title}-${link.label}-${index}`}>
            <a
              href={link.href}
              className="text-sm font-[Poppins] font-medium md:text-base text-muted-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
