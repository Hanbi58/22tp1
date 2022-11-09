import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const Toggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 12 0 L 12 25" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />

      <Path
        variants={{
          closed: { d: "M 0 12 L 24 12" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
