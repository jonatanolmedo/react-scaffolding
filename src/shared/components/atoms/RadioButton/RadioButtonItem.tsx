import React, { forwardRef, useMemo, useState } from "react";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";
import StringsId from "../../../../constants/StringsId";
import { ColorItemsList } from "../../../../constants/Lists";

interface Props {
  selectedButtonId: string | undefined;
  onSelectButton: (id: string | undefined) => void;
}

const RadioButtonItem: React.ForwardRefRenderFunction<
  RadioButtonProps,
  Props
> = ({ selectedButtonId, onSelectButton }, ref) => {
  const radioButtons = useMemo(() => ColorItemsList, []);
  const handleSelection = (selectedId: string | undefined) => {
    onSelectButton(selectedId);
  };
  return (
    <RadioGroup
      layout="row"
      testID={StringsId.radioGroup}
      accessibilityLabel={StringsId.radioGroup}
      containerStyle={{ marginBottom: 10 }}
      radioButtons={radioButtons}
      onPress={handleSelection}
      selectedId={selectedButtonId}
    />
  );
};

export default forwardRef(RadioButtonItem);
