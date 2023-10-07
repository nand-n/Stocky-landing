// import { motion } from "framer-motion";
// import { textContainer, textVariant2 } from "../Common/motion";

// export const TypingText = ({ title, textStyles }) => (
//   <motion.p
//     variants={textContainer}
//     className={`muli text-neutralGray text-base mb-8`}
//   >
//     {Array.from(title).map((letter, index) => (
//       <motion.span variants={textVariant2} key={index}>
//         {letter === " " ? "\u00A0" : letter}
//       </motion.span>
//     ))}
//   </motion.p>
// );

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../Common/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.div
    className={`muli text-base mb-8 w-full `}
    style={{ width: "50%" /* or any other desired width */ }}
  >
    <motion.p variants={textContainer}>
      {Array.from(title).map((letter, index) => (
        <motion.span
          className="muli text-base mb-8"
          variants={textVariant2}
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  </motion.div>
);
