import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { DropdownContext } from './Provider';
import { DropdownSection } from './Section';

const DropdownRoot: React.FC = () => {
  const { options, cachedId, getOptionById } = useContext(DropdownContext);

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

  return (
    <div className="dropdown-root">
      <motion.div
        className="dropdown-container"
        animate={{
          x,
          width,
          height,
        }}
      >
        <motion.div
          animate={{
            x: -x,
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
    </div>
  );
};

export { DropdownRoot };
