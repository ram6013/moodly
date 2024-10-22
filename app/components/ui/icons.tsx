'use client'

import * as React from 'react'

import { cn } from '../../lib/utils'
import exp from 'constants'
export function ArrowUpIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
      </svg>
  );
}

export function ChevronUpIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
          <path d="m18 15-6-6-6 6" />
      </svg>
  );
}

export function InstagramIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
  );
}

export function PhoneIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
  );
}

export function XIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
      </svg>
  );
}
export function DollarSign({ className }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 48 48"
      fill="none"
      className="rounded-full border-2 border-[#14857a] bg-secondary"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3911_65435)">
        <path
          opacity="0.2"
          d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"
          fill="#14857a"
        ></path>
        <path
          d="M24 18.75V20.25"
          stroke="#14857a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M24 27.75V29.25"
          stroke="#14857a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"
          stroke="#14857a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.75 27.75H25.125C25.6223 27.75 26.0992 27.5525 26.4508 27.2008C26.8025 26.8492 27 26.3723 27 25.875C27 25.3777 26.8025 24.9008 26.4508 24.5492C26.0992 24.1975 25.6223 24 25.125 24H22.875C22.3777 24 21.9008 23.8025 21.5492 23.4508C21.1975 23.0992 21 22.6223 21 22.125C21 21.6277 21.1975 21.1508 21.5492 20.7992C21.9008 20.4475 22.3777 20.25 22.875 20.25H26.25"
          stroke="#14857a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3911_65435">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(12 12)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  )
}

export function IconDate({ className }: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8h16v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm13-6h1a2 2 0 0 1 2 2v2H0V4a2 2 0 0 1 2-2h1v1a1 1 0 1 0 2 0V2h6v1a1 1 0 0 0 2 0zM4 0a1 1 0 0 1 1 1v1H3V1a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v1h-2V1a1 1 0 0 1 1-1z"
        fill-rule="evenodd"
      ></path>
    </svg>
  )
}

export function IconCrieditCard({ className }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      className={className}
      height="12"
      fill="#969696"
      stroke="#969696"
      version="1.1"
      viewBox="0 0 488.201 488.201"
      xmlSpace="preserve"
    >
      <g>
        <path d="M265.2 350.251H33.6c-5.3 0-9.6-4.3-9.6-9.6v-182.6h408.5v24c0 6.6 5.4 12 12 12s12-5.4 12-12v-86.5c0-18.5-15.1-33.6-33.6-33.6H33.6c-18.6 0-33.6 15.1-33.6 33.6v245.1c0 18.5 15.1 33.6 33.6 33.6h231.7c6.6 0 12-5.4 12-12s-5.4-12-12.1-12zM33.6 85.951h389.3c5.3 0 9.6 4.3 9.6 9.6v38.5H23.9v-38.5c0-5.3 4.4-9.6 9.7-9.6z"></path>
        <path d="M240.2 247.151c0-6.6-5.4-12-12-12H84c-6.6 0-12 5.4-12 12s5.4 12 12 12h144.2c6.7 0 12-5.4 12-12zM84 278.151c-6.6 0-12 5.4-12 12s5.4 12 12 12h57.7c6.6 0 12-5.4 12-12s-5.4-12-12-12H84zM82.6 215.651h144.2c6.6 0 12-5.4 12-12s-5.4-12-12-12H82.6c-6.6 0-12 5.4-12 12s5.3 12 12 12zM476.3 298.251h-17.6v-28c0-34.7-28.3-63-63-63s-63 28.3-63 63v28h-17.6c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h161.1c6.6 0 12-5.4 12-12v-104c.1-6.7-5.3-12-11.9-12zm-119.6-28.1c0-21.5 17.5-39 39-39s39 17.5 39 39v28h-78v-28zm107.6 132H327.1v-80h137.1v80h.1z"></path>
      </g>
    </svg>
  )
}
export function IconPayPal({ className }: React.ComponentProps<'svg'>) {
  return (
    <img
      src="https://js.stripe.com/v3/fingerprinted/img/payment-methods/icon-pm-paypal-0383a0ae3febbf0c0d8e721737884ab0.svg"
      className={className}
      alt="/favicon.ico"
    ></img>
  )
}

export function IconMarket({ className }: React.ComponentProps<'svg'>) {
  return (
    <svg width="40" height="40" fill="none">
      <g clipPath="url(#white_circle_svg__a)">
        <path
          stroke="#2563EB"
          d="M12.75 15.75c0 1.243.75 2.5 2.25 2.5s2.5-1.257 2.5-2.5c0 1.243 1 2.5 2.5 2.5s2.5-1.257 2.5-2.5c0 1.243 1 2.5 2.5 2.5s2.25-1.257 2.25-2.5m-12.5 11.5h10.5a2 2 0 0 0 2-2v-9.067a2 2 0 0 0-.179-.827l-.538-1.184A2 2 0 0 0 24.713 13h-9.425a2 2 0 0 0-1.82 1.172l-.538 1.184a2 2 0 0 0-.18.827v9.067a2 2 0 0 0 2 2Zm3-3.5a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3.5h-4.5v-3.5ZM39.25 20c0 10.631-8.619 19.25-19.25 19.25S.75 30.631.75 20 9.369.75 20 .75 39.25 9.369 39.25 20Z"
        ></path>
      </g>
    </svg>
  )
}

export function IconPayouts({ className }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3825_65734)">
        <path
          opacity="0.2"
          d="M4 15H11.1C11.3303 14.9987 11.5538 15.078 11.7318 15.2241C11.9099 15.3702 12.0313 15.5739 12.075 15.8C12.266 16.6994 12.76 17.5059 13.4745 18.0846C14.189 18.6633 15.0806 18.9791 16 18.9791C16.9194 18.9791 17.811 18.6633 18.5255 18.0846C19.24 17.5059 19.734 16.6994 19.925 15.8C19.9687 15.5739 20.0901 15.3702 20.2682 15.2241C20.4462 15.078 20.6697 14.9987 20.9 15H28V9C28 8.46957 27.7893 7.96086 27.4142 7.58579C27.0391 7.21071 26.5304 7 26 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V15Z"
          fill="#14857a"
        ></path>
        <path
          d="M26 7H6C4.89543 7 4 7.89543 4 9V23C4 24.1046 4.89543 25 6 25H26C27.1046 25 28 24.1046 28 23V9C28 7.89543 27.1046 7 26 7Z"
          stroke="#14857a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4 15H11.1C11.3303 14.9987 11.5538 15.078 11.7318 15.2241C11.9099 15.3702 12.0313 15.5739 12.075 15.8C12.266 16.6994 12.76 17.5059 13.4745 18.0847C14.189 18.6634 15.0806 18.9791 16 18.9791C16.9194 18.9791 17.811 18.6634 18.5255 18.0847C19.24 17.5059 19.734 16.6994 19.925 15.8C19.9687 15.5739 20.0901 15.3702 20.2682 15.2241C20.4462 15.078 20.6697 14.9987 20.9 15H28"
          stroke="#14857a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4 11H28"
          stroke="#14857a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3825_65734">
          <rect width="32" height="32" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}
export function IconTransactions({ className }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3825_65718)">
        <path
          opacity="0.2"
          d="M4 26V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7V26L24 24L20 26L16 24L12 26L8 24L4 26Z"
          fill="#6A3CE2"
        ></path>
        <path
          d="M9.5 13H22.5"
          stroke="#6A3CE2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.5 17H22.5"
          stroke="#6A3CE2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4 26V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7V26L24 24L20 26L16 24L12 26L8 24L4 26Z"
          stroke="#6A3CE2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3825_65718">
          <rect width="32" height="32" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}

export function IconReviews({ className }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3821_65274)">
        <path
          opacity="0.2"
          d="M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z"
          fill="#E16727"
        ></path>
        <path
          d="M19 14H24"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19 18H24"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M11.5117 18C13.1686 18 14.5117 16.6569 14.5117 15C14.5117 13.3431 13.1686 12 11.5117 12C9.85486 12 8.51172 13.3431 8.51172 15C8.51172 16.6569 9.85486 18 11.5117 18Z"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M11.5117 18C13.1686 18 14.5117 16.6569 14.5117 15C14.5117 13.3431 13.1686 12 11.5117 12C9.85486 12 8.51172 13.3431 8.51172 15C8.51172 16.6569 9.85486 18 11.5117 18Z"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.63672 21C7.85702 20.1396 8.35742 19.377 9.05903 18.8324C9.76064 18.2878 10.6235 17.9922 11.5117 17.9922C12.3999 17.9922 13.2628 18.2878 13.9644 18.8324C14.666 19.377 15.1664 20.1396 15.3867 21"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3821_65274">
          <rect width="32" height="32"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}

export function StoreIcon({ className }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="border-2 border-[#E16727]  rounded-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="var(--orange0)"></rect>
      <g clipPath="url(#clip0_3911_65448)">
        <path
          opacity="0.2"
          d="M21 21V22.5C21 23.2956 20.6839 24.0587 20.1213 24.6213C19.5587 25.1839 18.7956 25.5 18 25.5C17.2044 25.5 16.4413 25.1839 15.8787 24.6213C15.3161 24.0587 15 23.2956 15 22.5V21"
          fill="#E16727"
        ></path>
        <path
          opacity="0.2"
          d="M33 21V22.5C33 23.2956 32.6839 24.0587 32.1213 24.6213C31.5587 25.1839 30.7956 25.5 30 25.5C29.2044 25.5 28.4413 25.1839 27.8787 24.6213C27.3161 24.0587 27 23.2956 27 22.5V21"
          fill="#E16727"
        ></path>
        <path
          d="M16.5 25.0859V31.4984C16.5 31.6973 16.579 31.8881 16.7197 32.0288C16.8603 32.1694 17.0511 32.2484 17.25 32.2484H30.75C30.9489 32.2484 31.1397 32.1694 31.2803 32.0288C31.421 31.8881 31.5 31.6973 31.5 31.4984V25.0859"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.0625 15.75H30.9375C31.1002 15.7513 31.2582 15.8049 31.3881 15.9028C31.5181 16.0007 31.6132 16.1377 31.6594 16.2937L33 21H15L16.3406 16.2937C16.3868 16.1377 16.4819 16.0007 16.6119 15.9028C16.7418 15.8049 16.8998 15.7513 17.0625 15.75V15.75Z"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21 21V22.5C21 23.2956 20.6839 24.0587 20.1213 24.6213C19.5587 25.1839 18.7956 25.5 18 25.5C17.2044 25.5 16.4413 25.1839 15.8787 24.6213C15.3161 24.0587 15 23.2956 15 22.5V21"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M27 21V22.5C27 23.2956 26.6839 24.0587 26.1213 24.6213C25.5587 25.1839 24.7956 25.5 24 25.5C23.2044 25.5 22.4413 25.1839 21.8787 24.6213C21.3161 24.0587 21 23.2956 21 22.5V21"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M33 21V22.5C33 23.2956 32.6839 24.0587 32.1213 24.6213C31.5587 25.1839 30.7956 25.5 30 25.5C29.2044 25.5 28.4413 25.1839 27.8787 24.6213C27.3161 24.0587 27 23.2956 27 22.5V21"
          stroke="#E16727"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3911_65448">
          <rect width="24" height="24" transform="translate(12 12)"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}
export function ManageUsersIcon({ className }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="border-2 border-[#2563EB] rounded-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill=""></rect>
      <g clipPath="url(#clip0_3911_65564)">
        <path
          opacity="0.2"
          d="M31.246 18.666C31.0865 18.7228 30.9184 18.7514 30.7491 18.7503C30.3513 18.7503 29.9697 18.5923 29.6884 18.311C29.4071 18.0297 29.2491 17.6482 29.2491 17.2503C29.2481 17.0811 29.2766 16.9129 29.3335 16.7535C27.4725 15.3828 25.1556 14.7806 22.8628 15.0717C20.57 15.3627 18.477 16.5246 17.0175 18.3167C15.5581 20.1089 14.844 22.3937 15.0232 24.698C15.2025 27.0022 16.2613 29.1492 17.9803 30.6941C18.5447 29.5827 19.4058 28.6493 20.4681 27.9973C21.5305 27.3454 22.7526 27.0003 23.9991 27.0003C23.2574 27.0003 22.5324 26.7804 21.9157 26.3684C21.299 25.9563 20.8184 25.3706 20.5345 24.6854C20.2507 24.0002 20.1764 23.2462 20.3211 22.5187C20.4658 21.7913 20.823 21.1231 21.3474 20.5987C21.8719 20.0742 22.5401 19.7171 23.2675 19.5724C23.9949 19.4277 24.7489 19.502 25.4341 19.7858C26.1194 20.0696 26.705 20.5503 27.1171 21.167C27.5292 21.7836 27.7491 22.5087 27.7491 23.2503C27.7491 24.2449 27.354 25.1987 26.6507 25.902C25.9475 26.6053 24.9936 27.0003 23.9991 27.0003C25.2455 27.0003 26.4677 27.3454 27.53 27.9973C28.5924 28.6493 29.4535 29.5827 30.0178 30.6941C31.6794 29.1995 32.7254 27.1402 32.9524 24.917C33.1795 22.6937 32.5712 20.4655 31.246 18.666Z"
          fill="#2563EB"
        ></path>
        <path
          d="M24 27C26.0711 27 27.75 25.3211 27.75 23.25C27.75 21.1789 26.0711 19.5 24 19.5C21.9289 19.5 20.25 21.1789 20.25 23.25C20.25 25.3211 21.9289 27 24 27Z"
          stroke="#2563EB"
          strokeWidth="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M17.9805 30.6943C18.5448 29.5828 19.4058 28.6493 20.4682 27.9972C21.5305 27.3452 22.7527 27 23.9992 27C25.2457 27 26.4679 27.3452 27.5303 27.9972C28.5926 28.6493 29.4537 29.5828 30.018 30.6943"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M30.75 18.75C31.5784 18.75 32.25 18.0784 32.25 17.25C32.25 16.4216 31.5784 15.75 30.75 15.75C29.9216 15.75 29.25 16.4216 29.25 17.25C29.25 18.0784 29.9216 18.75 30.75 18.75Z"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M30.75 15.75V14.625"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M29.4461 16.5L28.4805 15.9375"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M29.4461 18L28.4805 18.5625"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M30.75 18.75V19.875"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M32.0547 18L33.0203 18.5625"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M32.0547 16.5L33.0203 15.9375"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M32.9344 22.922C32.9799 23.2796 33.0018 23.6397 33 24.0002C33 25.7802 32.4722 27.5203 31.4832 29.0003C30.4943 30.4803 29.0887 31.6339 27.4442 32.3151C25.7996 32.9963 23.99 33.1745 22.2442 32.8272C20.4984 32.48 18.8947 31.6228 17.636 30.3641C16.3774 29.1055 15.5202 27.5018 15.1729 25.756C14.8257 24.0101 15.0039 22.2005 15.6851 20.556C16.3663 18.9115 17.5198 17.5059 18.9999 16.5169C20.4799 15.528 22.22 15.0002 24 15.0002C24.2786 14.9984 24.5571 15.0109 24.8344 15.0377"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3911_65564">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(12 12)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  )
}

function IconNextChat({
  className,
  inverted,
  ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean }) {
  const id = React.useId()

  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={`gradient-${id}-1`}
          x1="10.6889"
          y1="10.3556"
          x2="13.8445"
          y2="14.2667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id={`gradient-${id}-2`}
          x1="11.7555"
          y1="4.8"
          x2="11.7376"
          y2="9.50002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <path
        d="M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z"
        fill={inverted ? 'black' : 'white'}
        stroke={inverted ? 'black' : 'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="mask0_91_2047"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={16}
      >
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
      </mask>
      <g mask="url(#mask0_91_2047)">
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
        <path
          d="M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z"
          fill={`url(#gradient-${id}-1)`}
        />
        <rect
          x="11.2222"
          y="4.8"
          width="1.06667"
          height="6.4"
          fill={`url(#gradient-${id}-2)`}
        />
      </g>
    </svg>
  )
}

function IconOpenAI({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <title>OpenAI icon</title>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

function IconDiscord({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 16 16"
    >
      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
    </svg>
  )
}

function IconGitHub({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconSeparator({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  )
}

function IconArrowDown({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}
export function IconIntegration({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3911_65741)">
        <path
          d="M16.5615 10.3125L12.0771 14.7969C11.8455 15.0293 11.5704 15.2137 11.2674 15.3396C10.9644 15.4654 10.6395 15.5302 10.3115 15.5302C9.98337 15.5302 9.65852 15.4654 9.35553 15.3396C9.05254 15.2137 8.77738 15.0293 8.54583 14.7969L5.20208 11.4531C4.96965 11.2216 4.78522 10.9464 4.65937 10.6434C4.53353 10.3404 4.46875 10.0156 4.46875 9.6875C4.46875 9.35941 4.53353 9.03456 4.65937 8.73157C4.78522 8.42858 4.96965 8.15342 5.20208 7.92187L9.68646 3.4375"
          stroke="var(--black9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M6.875 13.125L2.5 17.5"
          stroke="var(--black9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M11.25 5L14.375 1.875"
          stroke="var(--black9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M18.125 5.625L15 8.75"
          stroke="var(--black9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.5 11.25L8.75 2.5"
          stroke="var(--black9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3911_65741">
          <rect width="20" height="20" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  )
}

function IconArrowRight({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  )
}

function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  )
}

function IconPlus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  )
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconSpinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4 animate-spin', className)}
      {...props}
    >
      <path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" />
    </svg>
  )
}
export function IconArrowBack() {
  return (
    <svg
      aria-hidden="true"
      className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--refund-svg Button-icon-svg Icon-color-svg Icon-color--inherit-svg"
      height="12"
      width="12"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 5a5 5 0 0 1 0 10 1 1 0 0 1 0-2 3 3 0 0 0 0-6l-6.586-.007L6.45 9.528a1 1 0 0 1-1.414 1.414L.793 6.7a.997.997 0 0 1 0-1.414l4.243-4.243A1 1 0 0 1 6.45 2.457L3.914 4.993z"
        fill-rule="evenodd"
      ></path>
    </svg>
  )
}

function IconMessage({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" />
    </svg>
  )
}
export function IconStar({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      version="1.1"
      viewBox="0 0 47.94 47.94"
      xmlSpace="preserve"
    >
      <path
        fill="#ED8A19"
        d="M26.285 2.486l5.407 10.956a2.58 2.58 0 001.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 00-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 00-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 00-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 001.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z"
      ></path>
    </svg>
  )
}
export function IconStarGray({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="#000"
      version="1.1"
      viewBox="0 0 47.94 47.94"
      xmlSpace="preserve"
    >
      <path
        fill="#a2a1a0"
        d="M26.285 2.486l5.407 10.956a2.58 2.58 0 001.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 00-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 00-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 00-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 001.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z"
      ></path>
    </svg>
  )
}

export function IconBank({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <div
      style={{
        borderRadius: '50%',
        overflow: 'hidden',
        width: '20px',
        height: '20px'
      }}
    >
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 32 32"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#D5DBE1" d="M0 0h32v32H0z"></path>
        <path
          d="M6.168 12.875a1.25 1.25 0 0 0 1.106.625h17.452a1.25 1.25 0 0 0 .649-2.332C24.976 10.938 21.85 9.215 16 6c-5.851 3.215-8.976 4.937-9.375 5.168a1.25 1.25 0 0 0-.457 1.707Zm13.582 2.5V23.5h-1.875v-8.125h-3.75V23.5H12.25v-8.125H8.5V23.5H7a1 1 0 0 0-1 1V26h20v-1.5a1 1 0 0 0-1-1h-1.5v-8.125h-3.75Z"
          fill="#545969"
        ></path>
      </svg>
    </div>
  )
}
export function IconGreenCheck() {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 text-white"
      viewBox="0 0 16 16"
      fill="green"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z"
        fill-rule="evenodd"
      ></path>
    </svg>
  )
}

function IconTrash({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconRefresh({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconStop({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" />
    </svg>
  )
}
export function IconReset() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 256 256"
    >
      <path
        fill="#fff"
        strokeMiterlimit="10"
        d="M75.702 53.014c-2.142 7.995-7.27 14.678-14.439 18.816-7.168 4.138-15.519 5.239-23.514 3.095-16.505-4.423-26.335-21.448-21.913-37.953C20.258 20.467 37.286 10.64 53.79 15.06a30.885 30.885 0 0111.413 5.809l-8.349 8.35h26.654V2.565l-8.354 8.354a44.827 44.827 0 00-17.74-9.381C33.451-4.882 8.735 9.389 2.314 33.35c-6.42 23.961 7.851 48.678 31.811 55.098A45.26 45.26 0 0045.842 90c7.795 0 15.488-2.044 22.42-6.046 10.407-6.008 17.851-15.709 20.962-27.317l-13.522-3.623z"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      ></path>
    </svg>
  )
}

function IconSidebar({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" />
    </svg>
  )
}

function IconMoon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
    </svg>
  )
}

function IconSun({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
    </svg>
  )
}

function IconCopy({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  )
}

function IconCheck({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconDownload({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" />
    </svg>
  )
}

function IconClose({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
    </svg>
  )
}

function IconEdit({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  )
}

function IconShare({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" />
    </svg>
  )
}

function IconUsers({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" />
    </svg>
  )
}

function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconChevronUpDown({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z" />
    </svg>
  )
}

export {
  IconEdit,
  IconNextChat,
  IconOpenAI,
  IconDiscord,
  IconGitHub,
  IconSeparator,
  IconArrowDown,
  IconArrowRight,
  IconUser,
  IconPlus,
  IconArrowElbow,
  IconSpinner,
  IconMessage,
  IconTrash,
  IconRefresh,
  IconStop,
  IconSidebar,
  IconMoon,
  IconSun,
  IconCopy,
  IconCheck,
  IconDownload,
  IconClose,
  IconShare,
  IconUsers,
  IconExternalLink,
  IconChevronUpDown
}
