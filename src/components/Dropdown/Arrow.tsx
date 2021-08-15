import React, { useContext, useMemo } from 'react';

import { motion } from 'framer-motion';
import { DropdownContext } from './Provider';

const DropdownArrow: React.FC<{
  isFirstInteraction: boolean;
}> = ({ isFirstInteraction }: { isFirstInteraction: boolean }) => {
  const { cachedId, getOptionById } = useContext(DropdownContext);

  const cachedOption = useMemo(
    () => getOptionById(cachedId),
    [cachedId, getOptionById],
  );

  const x = cachedOption ? cachedOption.optionCenterX : 0;

  return (
    <motion.div
      className="dropdown-arrow"
      initial={{
        opacity: 0,
      }}
      animate={{
        x,
        pointerEvents: 'none',
        opacity: x > 0 ? 1 : 0,
      }}
      transition={{
        ease: 'easeOut',
        x: { duration: isFirstInteraction ? 0 : 0.22 },
      }}
    />
  );
};

export default DropdownArrow;
