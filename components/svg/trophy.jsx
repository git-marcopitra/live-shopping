const Trophy = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 15H14V19H13V15Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 19H10V15H11V19Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.3"
    />
    <path
      d="M21 4H18V9.96456C19.6961 9.72194 21 8.26324 21 6.5V4ZM21.5 3C21.7761 3 22 3.22386 22 3.5V6.5C22 8.98528 19.9853 11 17.5 11C17.2239 11 17 10.7761 17 10.5V3.5C17 3.22386 17.2239 3 17.5 3H21.5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.3"
    />
    <path
      d="M3 4V6.5C3 8.26324 4.30385 9.72194 6 9.96456V4H3ZM2.5 3H6.5C6.77614 3 7 3.22386 7 3.5V10.5C7 10.7761 6.77614 11 6.5 11C4.01472 11 2 8.98528 2 6.5V3.5C2 3.22386 2.22386 3 2.5 3Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.3"
    />
    <path
      d="M8 19V21H16V19H8ZM8 18H16C16.5523 18 17 18.4477 17 19V21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21V19C7 18.4477 7.44772 18 8 18Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.3"
    />
    <path
      d="M7.5 3C7.22386 3 7 3.22386 7 3.5V10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10V3.5C17 3.22386 16.7761 3 16.5 3H7.5ZM7.5 2H16.5C17.3284 2 18 2.67157 18 3.5V10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10V3.5C6 2.67157 6.67157 2 7.5 2Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.3"
    />
  </svg>
);

export default Trophy;