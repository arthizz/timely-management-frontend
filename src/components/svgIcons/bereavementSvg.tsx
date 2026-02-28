
export default function BereavementSvg(){

    return (
        <svg className="w-8 h-8 flex-no-shrink rounded-full"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg">

            <circle cx="32" cy="32" r="28"
                    fill="#E5E7EB"
                    stroke="#111827"
                    strokeWidth="2"/>

            <rect x="28" y="28" width="8" height="16" rx="2"
                    fill="#FFFFFF"
                    stroke="#111827"
                    strokeWidth="2"/>

            <line x1="24" y1="44" x2="40" y2="44"
                    stroke="#111827"
                    strokeWidth="2.5"
                    strokeLinecap="round"/>

            <line x1="32" y1="24" x2="32" y2="28"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"/>

            <path d="M32 18 C28 24 36 24 32 18Z"
                    fill="#F59E0B"
                    stroke="#111827"
                    strokeWidth="1"/>

        </svg>
    );

}