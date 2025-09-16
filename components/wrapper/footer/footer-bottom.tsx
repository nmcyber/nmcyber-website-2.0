import { Badge } from "@/components/ui/badge"

export function FooterBottom() {
  return (
    <div
      className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      style={{ borderColor: "hsl(240, 3.7%, 15.9%)" }}
    >
      <div className="text-sm" style={{ color: "hsl(240, 5%, 64.9%)" }}>
        © 2024 NMCYBER. All Rights Reserved
      </div>

      <div className="flex items-center gap-4">
        <Badge variant="secondary" className="bg-blue-600 text-white border-blue-500 hover:bg-blue-700">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
          All Systems Normal
        </Badge>
        <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: "hsl(240, 5%, 64.9%)" }}>
          Terms & Policies
        </a>
      </div>
    </div>
  )
}
