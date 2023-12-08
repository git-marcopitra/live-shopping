const Heart = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 26 24"
    fill="none"
    {...props}
  >
    <g clip-path="url(#clip0_708_5553)">
      <g filter="url(#filter0_d_708_5553)">
        <path
          d="M20.9091 11.9683C22.7933 10.031 22.7933 6.88441 20.9091 4.94713C19.0325 3.01762 15.9957 3.01762 14.1191 4.94713L13.1807 5.91192C12.9844 6.11378 12.6602 6.11378 12.4638 5.91192L11.5255 4.94713C9.64882 3.01762 6.61208 3.01762 4.73543 4.94713C2.85121 6.88441 2.85121 10.031 4.73543 11.9683L12.8223 20.2829L20.9091 11.9683ZM12.8223 4.84618L13.4022 4.24991C15.6715 1.9167 19.3567 1.9167 21.626 4.24991C23.8877 6.57535 23.8877 10.34 21.626 12.6655L13.1807 21.3486C12.9844 21.5505 12.6602 21.5505 12.4638 21.3486L4.01857 12.6655C1.75683 10.34 1.75683 6.57535 4.01857 4.24991C6.28787 1.9167 9.97303 1.9167 12.2423 4.24991L12.8223 4.84618Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_708_5553"
        x="1.32227"
        y="2.5"
        width="23"
        height="21"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_708_5553"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_708_5553"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_708_5553">
        <rect
          width="25"
          height="23"
          fill="white"
          transform="translate(0.322266 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default Heart;
