import React, { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { DropdownContext } from './Provider';
import { DropdownSection } from './Section';
import DropdownArrow from './Arrow';

const DropdownRoot: React.FC = () => {
  const [hovering, setHovering] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const { options, cachedId, getOptionById, targetId } =
    useContext(DropdownContext);

  const cachedOption = useMemo(
    () => getOptionById(cachedId),
    [cachedId, getOptionById],
  );

  let [x, width, height] = [0, 0, 0];

  if (cachedOption) {
    const { optionCenterX, contentDimensions } = cachedOption;

    width = contentDimensions?.width;
    height = contentDimensions?.height;
    x = optionCenterX - width / 2;
  }

  const isActive = targetId !== null || hovering;
  const isFirstInteraction = isActive && !hasInteracted;

  if (isFirstInteraction) {
    setTimeout(() => {
      if (!hasInteracted) setHasInteracted(true);
    }, 15);
  }
  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        className="dropdown-root"
        animate={{ opacity: isActive ? 1 : 0, rotateX: isActive ? 0 : -15 }}
        transition={{
          opacity: { duration: 0.22, delay: 0.05 },
          rotateX: { duration: 0.22, delay: 0.05 },
        }}
      >
        <motion.div
          className="dropdown-container"
          animate={{
            x,
            width,
            height,
            pointerEvents: isActive ? 'unset' : 'none',
          }}
          transition={{
            ease: 'easeOut',
            x: { duration: isFirstInteraction ? 0 : 0.22 },
            width: { duration: isFirstInteraction ? 0 : 0.22 * 0.93 },
            height: { duration: isFirstInteraction ? 0 : 0.22 * 0.93 },
            pointerEvents: { delay: 0.05 },
          }}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
        >
          <motion.div
            animate={{
              x: -x,
            }}
            transition={{
              x: isFirstInteraction ? 0 : null,
            }}
          >
            {options.map((dropDownElement) => (
              <DropdownSection
                key={dropDownElement.id}
                option={dropDownElement}
              />
            ))}
          </motion.div>
        </motion.div>
        <DropdownArrow isFirstInteraction />
      </motion.div>
    </div>
  );
};

export { DropdownRoot };
