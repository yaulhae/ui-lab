import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";

const toggleGroupItemClasses =
  "flex size-[35px] items-center justify-center bg-white leading-4 text-mauve11 first:rounded-l last:rounded-r hover:bg-violet3 focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none data-[state=on]:bg-violet6 data-[state=on]:text-violet12";

const ToggleGroupDemo = () => (
  <ToggleGroup
    className="inline-flex space-x-px rounded bg-mauve6 shadow-[0_2px_10px] shadow-blackA4"
    type="multiple"
    defaultValue={["center", "left"]}
    aria-label="Text alignment"
  >
    <ToggleGroupItem
      className={toggleGroupItemClasses}
      value="left"
      aria-label="Left aligned"
    >
      <TextAlignLeftIcon />
    </ToggleGroupItem>
    <ToggleGroupItem
      className={toggleGroupItemClasses}
      value="center"
      aria-label="Center aligned"
    >
      <TextAlignCenterIcon />
    </ToggleGroupItem>
    <ToggleGroupItem
      className={toggleGroupItemClasses}
      value="right"
      aria-label="Right aligned"
    >
      <TextAlignRightIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default ToggleGroupDemo;
