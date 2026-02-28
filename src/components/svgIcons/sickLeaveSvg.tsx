
export default function SickLeaveSvg(){

    return(

        <svg className="w-8 h-8 flex-no-shrink bg-green-lighter rounded-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">

            <circle cx="32" cy="32" r="28" fill="#FCD34D" stroke="#111827" strokeWidth="2"/>
            
            <line x1="20" y1="26" x2="26" y2="30" stroke="#111827" strokeWidth="3" stroke-linecap="round"/>
            <line x1="26" y1="26" x2="20" y2="30" stroke="#111827" strokeWidth="3" stroke-linecap="round"/>
            
            <line x1="38" y1="26" x2="44" y2="30" stroke="#111827" strokeWidth="3" stroke-linecap="round"/>
            <line x1="44" y1="26" x2="38" y2="30" stroke="#111827" strokeWidth="3" stroke-linecap="round"/>

            <path d="M24 44 Q32 38 40 44" fill="none" stroke="#111827" strokeWidth="3" stroke-linecap="round"/>

            <rect x="46" y="18" width="4" height="18" rx="2" fill="#E5E7EB" stroke="#111827" strokeWidth="1"/>
            <circle cx="48" cy="40" r="6" fill="#EF4444" stroke="#111827" strokeWidth="1"/>
            <rect x="47" y="24" width="2" height="12" fill="#EF4444"/>
        </svg>

    );

}