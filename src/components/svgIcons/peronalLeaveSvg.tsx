

export default function PersonalLeaveSvg(){

    return(

        <svg className="w-8 h-8 flex-no-shrink rounded-full"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg">

            <circle cx="32" cy="32" r="28" fill="#DDD6FE" stroke="#111827" strokeWidth="2"/>

            <rect x="20" y="22" width="24" height="20" rx="4"
                    fill="#FFFFFF"
                    stroke="#111827"
                    strokeWidth="2"/>

            <line x1="26" y1="18" x2="26" y2="24"
                    stroke="#111827"
                    strokeWidth="2.5"
                    strokeLinecap="round"/>

            <line x1="38" y1="18" x2="38" y2="24"
                    stroke="#111827"
                    strokeWidth="2.5"
                    strokeLinecap="round"/>

            <path d="M24 34 L30 40 L40 28"
                    fill="none"
                    stroke="#111827"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>

        </svg>

    );

}