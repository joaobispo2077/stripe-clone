import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { DropdownContext } from './Provider';

const DropdownBackground: React.FC = () => {
  const { cachedId, getOptionById } = useContext(DropdownContext);

  const cachedOption = useMemo(
    () => getOptionById(cachedId),
    [cachedId, getOptionById],
  );

  const backgroundHeight = cachedOption?.backgroundHeight ?? 0;

  return (
    <motion.div
      className="dropdown-background"
      animate={{
        height: backgroundHeight,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.22,
      }}
    ></motion.div>
  );
};

export default DropdownBackground;
