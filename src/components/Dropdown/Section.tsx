import React, { useContext } from 'react';
import { DropdownContext, OptionsShape } from './Provider';
import { motion } from 'framer-motion';

const DropdownSection: React.FC<{ option: OptionsShape }> = ({
  option,
}: {
  option: OptionsShape;
}) => {
  const { cachedId } = useContext(DropdownContext);
  const { id, WrappedContent, optionCenterX, contentDimensions } = option;

  const isActive = cachedId === id;

  const contentWidth = contentDimensions?.width ?? 0;
  const elementX = optionCenterX - contentWidth / 2;

  return (
    <motion.div
      className="dropdown-section"
      initial={{
        x: elementX,
      }}
      animate={{
        x: elementX,
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'unset' : 'none',
      }}
      transition={{
        ease: 'easeOut',
        opacity: { duration: 0.2 },
      }}
    >
      <WrappedContent />
    </motion.div>
  );
};

export { DropdownSection };
