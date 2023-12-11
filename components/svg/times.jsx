const Shirt = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 13 13"
    fill="none"
    {...props}
  >
    <path
      d="M9.61554 3.48282L3.38477 9.71359"
      stroke="white"
      strokeWidth="0.778846"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.38477 3.48282L9.61554 9.71359"
      stroke="white"
      strokeWidth="0.778846"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Shirt;
