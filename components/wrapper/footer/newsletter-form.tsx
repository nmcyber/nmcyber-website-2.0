import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterForm() {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-medium uppercase tracking-wider" style={{ color: "hsl(240, 5%, 64.9%)" }}>
        Subscribe to our newsletter
      </h4>
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your e-mail"
          className="flex-1"
          style={{
            backgroundColor: "hsl(240, 3.7%, 15.9%)",
            borderColor: "hsl(240, 3.7%, 15.9%)",
            color: "hsl(0, 0%, 98%)",
          }}
        />
        <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white px-3">
          <Mail className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
