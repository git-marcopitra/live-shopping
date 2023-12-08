import stylin, { variant } from "@stylin.js/react";
import React, { forwardRef } from "react";

export const Box = forwardRef(({ as, ...props }, ref) => {
  const BoxElement = stylin(as || "div")( );

  return <BoxElement {...props} ref={ref} />;
});

Box.displayName = "Box";
