// "use client";
// import React, { useState } from "react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// // import useFavorite from "@/app/hooks/useFavorite";
// // import { SafeUser } from "@/app/types";

// // import ClientOnly from "./ClientOnly";

// interface HeartButtonProps {
//   onClick?: () => void;
// }

// const HeartButton: React.FC<HeartButtonProps> = ({ onClick }) => {
//   // const { hasFavorited, toggleFavorite } = useFavorite({

//   // });
//   const handleHeartClick = () => {
//     setHasFavorited(!hasFavorited);
//     if (onClick) {
//       onClick();
//     }
//   };
//   const [hasFavorited, setHasFavorited] = useState(false);
//   return (
//     <div
//       onClick={handleHeartClick}
//       className="
//         relative
//         hover:opacity-80
//         transition
//         cursor-pointer
//       "
//     >
//       <AiOutlineHeart
//         size={28}
//         className="
//           fill-white
//           absolute
//           -top-[2px]
//           -right-[2px]
//         "
//       />
//       <AiFillHeart
//         size={24}
//         className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
//       />
//     </div>
//   );
// };

// export default HeartButton;

import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  onClick?: () => void; // Add an optional onClick prop
}

const HeartButton: React.FC<HeartButtonProps> = ({ onClick }) => {
  const [hasFavorited, setHasFavorited] = useState(false);

  const handleHeartClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop event propagation

    setHasFavorited(!hasFavorited);

    // Call the onClick function if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleHeartClick}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
