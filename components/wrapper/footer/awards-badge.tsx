export function AwardsBadge() {
  return (
    <div
      className="w-20 h-14 rounded-md flex items-center justify-center relative"
      style={{
        backgroundColor: '#f59e0b',
        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ea580c 100%)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="text-center relative z-10">
        <div
          className="text-[10px] font-bold leading-tight"
          style={{
            color: '#1a1a1a',
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)',
          }}
        >
          DELAWARE
        </div>
        <div
          className="text-[10px] font-bold leading-tight"
          style={{
            color: '#1a1a1a',
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)',
          }}
        >
          BUSINESS
        </div>
        <div
          className="text-[10px] font-bold leading-tight"
          style={{
            color: '#1a1a1a',
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)',
          }}
        >
          AWARDS
        </div>
      </div>
    </div>
  );
}
