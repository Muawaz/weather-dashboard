import { HStack, Switch, Text } from "@chakra-ui/react";
import { useState } from "react";
import useWeatherQueryStore from "../store";

const LabelSwitch = () => {
  const [checked, setChecked] = useState(false);
  const units = useWeatherQueryStore((s) => s.weatherQuery.units);
  const onSetUnits = useWeatherQueryStore((s) => s.setUnits);

  return (
    <HStack justifyContent="space-between" marginX={3}>
      <Text>Current Weather</Text>
      <Switch
        marginTop={5}
        size="lg"
        isChecked={checked}
        onChange={() => {
          setChecked(!checked);
          if (units === "metric") onSetUnits("imperial");
          else if (units === "imperial") onSetUnits("metric");
        }}
        sx={{
          ".chakra-switch__track::after": {
            content: checked ? '"C"' : '"F"',
            position: "absolute",
            top: "14px", // calc half of height
            left: checked ? "15%" : "70%",
            fontWeight: "bold",
            fontSize: "md",
          },
        }}
      />
    </HStack>
  );
};

export default LabelSwitch;
