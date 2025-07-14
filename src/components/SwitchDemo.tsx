import * as React from "react";
import { Switch, SwitchThumb } from "@radix-ui/react-switch";

const SwitchDemo = () => (
  <form>
    <div className="flex items-center">
      <label
        className="pr-[15px] text-[15px] leading-none text-black"
        htmlFor="airplane-mode"
      >
        Airplane mode
      </label>
      <Switch
        className="relative h-[25px] w-[42px] cursor-default rounded-full bg-black shadow-[0_2px_10px] shadow-black outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-white"
        id="airplane-mode"
        style={
          {
            ["-webkit-tap-highlight-color"]: "rgba(0, 0, 0, 0)",
          } as React.CSSProperties
        }
      >
        <SwitchThumb className="block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] shadow-black transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch>
    </div>
  </form>
);

export default SwitchDemo;
