import React, { useState, useCallback, useEffect } from 'react';

export type targetProp = number | null;

export type OptionsControll = {
  registerOption: CallableFunction;
  updateOptionProps: CallableFunction;
  getOptionById: CallableFunction;
  deleteOptionById: CallableFunction;
  options: OptionsShape[];
  targetId: targetProp;
  setTargetId: React.Dispatch<React.SetStateAction<targetProp>>;
  cachedId: targetProp;
  setCachedId: React.Dispatch<React.SetStateAction<targetProp>>;
};

export const DropdownContext = React.createContext<OptionsControll | null>(
  null,
);

export type OptionsShape = {
  id: targetProp;
  optionDimensions: number;
  optionCenterX: number;
  WrappedContent: React.ReactNode;
  backgroundHeight: number;
};

export const DropdownProvider: React.FC = (children: React.ReactNode) => {
  const [options, setOptions] = useState<OptionsShape[]>([]);
  const [targetId, setTargetId] = useState<targetProp>(null);
  const [cachedId, setCachedId] = useState<targetProp>(null);

  const registerOption = useCallback(
    ({
      id,
      optionDimensions,
      optionCenterX,
      WrappedContent,
      backgroundHeight,
    }: OptionsShape) => {
      setOptions((previousOptions) =>
        previousOptions.concat({
          id,
          optionDimensions,
          optionCenterX,
          WrappedContent,
          backgroundHeight,
        }),
      );
    },
    [setOptions],
  );

  const updateOptionProps = useCallback(
    (optionId: targetProp, props: OptionsShape) => {
      setOptions((previousOptions) =>
        previousOptions.map((previousOption) => {
          if (previousOption.id === optionId) {
            return {
              ...previousOption,
              ...props,
            };
          }
          return previousOption;
        }),
      );
    },
    [setOptions],
  );

  const getOptionById = useCallback(
    (id) => {
      const option = options.find((option) => option.id === id);
      return option;
    },
    [options],
  );

  const deleteOptionById = useCallback(
    (id) => {
      setOptions((previousOptions) =>
        previousOptions.filter((option) => option.id !== id),
      );
    },
    [setOptions],
  );

  useEffect(() => {
    if (targetId !== null) {
      setCachedId(targetId);
    }
  }, [targetId]);

  return (
    <DropdownContext.Provider
      value={{
        registerOption,
        updateOptionProps,
        getOptionById,
        deleteOptionById,
        options,
        targetId,
        setTargetId,
        cachedId,
        setCachedId,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
