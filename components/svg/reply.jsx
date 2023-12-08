const Reply = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 15 15"
    fill="none"
    {...props}
  >
    <g clip-path="url(#clip0_708_10373)">
      <path
        d="M6.87602 2.18841C6.87628 1.90523 6.5299 1.76775 6.33589 1.97403L1.33478 7.29127C1.22163 7.41158 1.22163 7.59915 1.33477 7.71946L6.3264 13.0272C6.52022 13.2333 6.86629 13.0963 6.86655 12.8134L6.86955 9.4408C9.95679 9.71168 11.904 10.8355 13.1685 12.9723C13.3354 13.2544 13.7688 13.1219 13.7494 12.7946C13.4824 8.29662 11.2877 5.80801 6.87336 5.17834L6.87602 2.18841Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_708_10373">
        <rect width="15" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Reply;
