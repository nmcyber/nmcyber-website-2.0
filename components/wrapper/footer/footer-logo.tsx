export function FooterLogo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
        <div className="text-white font-bold text-lg">
          <span>N</span>
          <span className="text-sm">M</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">
          NM<span className="text-cyan-400">CYBER</span>
        </h3>
        <p className="text-sm" style={{ color: "hsl(240, 5%, 64.9%)" }}>
          Turning Cyber Security Pains into Gains
        </p>
      </div>
    </div>
  )
}
