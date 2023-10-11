import React, { forwardRef, useMemo, useState } from "react";
import { RadioGroup } from "react-native-radio-buttons-group";
import StringsId from "../../../../constants/StringsId";
import { ColorItemsList } from "../../../../constants/Lists";

interface Props {}

const RadioButtonItem: React.ForwardRefRenderFunction<Props> = ({}, ref) => {
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const radioButtons = useMemo(() => ColorItemsList, []);
  return (
    <RadioGroup
      layout="row"
      testID={StringsId.radioGroup}
      accessibilityLabel={StringsId.radioGroup}
      containerStyle={{ marginBottom: 10 }}
      radioButtons={radioButtons}
      onPress={setSelectedId}
      selectedId={selectedId}
    />
  );
};

export default forwardRef(RadioButtonItem);
