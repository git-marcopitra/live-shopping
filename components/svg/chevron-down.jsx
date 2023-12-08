const ChevronDown = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 8"
    fill="none"
    {...props}
  >
    <path
      d="M1 1.18909L7 7.18909L13 1.18909"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ChevronDown;
