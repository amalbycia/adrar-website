'use client'


const Check = ({ color = 'currentColor' }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const Cross = ({ color = 'currentColor' }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

const AgencyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
)


export default function WhyAdrar() {
  return (
    <section className="bg-bor-foreground py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">

        {/* Headline */}
        <h2
          className="text-center font-heading font-medium text-white leading-[1] tracking-[0.1px] mb-20"
          style={{ fontSize: 'clamp(44px, 5vw, 72px)', maxWidth: '900px', margin: '0 auto 80px auto' }}
        >
          Hiring or traditional outsourcing?{' '}
          <i className="font-serif italic font-normal text-white opacity-90">
            Neither.
          </i>
        </h2>

        {/* Table Container */}
        <div className="w-full overflow-x-auto pb-8 scrollbar-hide">
          <div className="min-w-[900px] flex flex-col gap-2">
            
            {/* Headers row */}
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr] px-8 text-white font-serif italic text-lg pb-4">
              <div />
              <div className="text-center">Speed</div>
              <div className="text-center">Flexibility</div>
              <div className="text-center">Quality</div>
              <div className="text-center">Scalability</div>
              <div className="text-center">Efficiency</div>
              <div className="text-center">End-to-End</div>
            </div>

            {/* Row 1 - Adrar (Lime green hero block) */}
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr] bg-bor-primary text-bor-foreground rounded-xl p-6 items-center shadow-lg">
               <div className="flex gap-5 items-center mr-8">
                  <div className="w-14 h-14 bg-bor-foreground text-white rounded-[12px] flex items-center justify-center shrink-0">
                     <span className="font-heading font-black text-2xl tracking-tighter">ad.</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className="font-heading font-bold text-[22px] tracking-tight leading-none text-bor-foreground">Adrar</h3>
                     <p className="font-body text-[13.5px] text-bor-foreground/80 leading-snug max-w-[280px]">
                       Work with a Dubai institution with comprehensive full in-house production capabilities.
                     </p>
                  </div>
               </div>
               <div className="flex justify-center"><Check /></div>
               <div className="flex justify-center"><Check /></div>
               <div className="flex justify-center"><Check /></div>
               <div className="flex justify-center"><Check /></div>
               <div className="flex justify-center"><Check /></div>
               <div className="flex justify-center"><Check /></div>
            </div>

            {/* Row 2 - In-house team */}
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr] px-6 py-8 items-center text-white border-b border-white/10">
               <div className="flex gap-5 items-center mr-8">
                  <div className="w-14 h-14 bg-white/5 rounded-[12px] flex items-center justify-center shrink-0">
                     <UsersIcon />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className="font-heading font-semibold text-[19px] tracking-wide">In-house team</h3>
                     <p className="font-body text-[13.5px] text-white/50 leading-snug max-w-[280px]">
                       In-house teams don't always have the fabrication bandwidth or specialist machinery access.
                     </p>
                  </div>
               </div>
               <div className="flex justify-center"><Cross /></div>
               <div className="flex justify-center"><Check /></div>
               <div className="flex justify-center"><Check /></div>
               <div className="flex justify-center"><Cross /></div>
               <div className="flex justify-center"><Cross /></div>
               <div className="flex justify-center"><Cross /></div>
            </div>

            {/* Row 3 - Traditional Agency */}
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr] px-6 py-8 items-center text-white border-b border-white/10">
               <div className="flex gap-5 items-center mr-8">
                  <div className="w-14 h-14 bg-white/5 rounded-[12px] flex items-center justify-center shrink-0">
                     <AgencyIcon />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className="font-heading font-semibold text-[19px] tracking-wide">Traditional agency</h3>
                     <p className="font-body text-[13.5px] text-white/50 leading-snug max-w-[280px]">
                       Many agencies completely outsource their production, leading to high markups and major delays.
                     </p>
                  </div>
               </div>
               <div className="flex justify-center"><Cross /></div>
               <div className="flex justify-center"><Cross /></div>
               <div className="flex justify-center"><Check /></div>
               <div className="flex justify-center"><Check /></div>
               <div className="flex justify-center"><Cross /></div>
               <div className="flex justify-center"><Cross /></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
