/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from '../../hooks/useDimensions';
import { DropdownContext } from './Provider';

export type DropdownOptionsProps = {
  name: string;
  Content: () => React.ReactElement;
  backgroundHeight: number;
};

let lastOptionId = 0;

const DropdownOption: React.FC<DropdownOptionsProps> = ({
  name,
  Content,
  backgroundHeight,
}) => {
  const idRef = useRef(++lastOptionId);
  const id = idRef.current;

  const [optionHook, optionDimensions] = useDimensions();
  const [registered, setRegistered] = useState(false);

  const {
    registerOption,
    updateOptionProps,
    deleteOptionById,
    targetId,
    setTargetId,
  } = useContext(DropdownContext);

  useEffect(() => {
    if (!registered && optionDimensions) {
      const WrappedContent = () => {
        const contentRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
          const contentDimensions =
            contentRef?.current?.getBoundingClientRect();
          updateOptionProps(id, { contentDimensions });
        }, []);

        return (
          <div ref={contentRef}>
            <Content />
          </div>
        );
      };

      registerOption({
        id,
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
        WrappedContent,
        backgroundHeight,
      });

      setRegistered(true);
    }

    if (registered && optionDimensions) {
      updateOptionProps(id, {
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
      });
    }
  }, [
    registerOption,
    id,
    registered,
    Content,
    optionDimensions,
    updateOptionProps,
    backgroundHeight,
  ]);

  return (
    <motion.button ref={optionHook} className="dropdown-option">
      {name}
    </motion.button>
  );
};

export { DropdownOption };
