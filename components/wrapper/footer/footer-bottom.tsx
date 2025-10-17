export function FooterBottom() {
  return (
    <div
      className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      style={{ borderColor: 'hsl(240, 3.7%, 15.9%)' }}
    >
      <div className="text-[20px] leading-[1.75] tracking-normal font-[Poppins] font-normal text-muted-foreground">
        © 2024 NMCYBER. All Rights Reserved
      </div>

      <div className="flex items-center gap-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-5 py-3 text-accent backdrop-blur-sm">
          <span className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-sm font-[Poppins] font-medium">All Systems Normal</span>
        </div>
        <a
          href="/terms-and-policies"
          className="text-[20px] leading-[1.75] tracking-normal font-[Poppins] font-normal text-muted-foreground hover:text-foreground/70"
        >
          Terms & Policies
        </a>
      </div>
    </div>
  );
}
