import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DropdownContext } from './Provider';
import { DropdownSection } from './Section';

const DropdownRoot: React.FC = () => {
  const { options } = useContext(DropdownContext);

  return (
    <div className="dropdown-root">
      <div>
        <div className="dropdown-container">
          {options.map((dropDownElement) => (
            <DropdownSection
              key={dropDownElement.id}
              option={dropDownElement}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { DropdownRoot };
