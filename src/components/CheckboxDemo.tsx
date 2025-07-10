"use client";

import * as React from "react";
import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";
import { Checkbox, CheckboxIndicator } from "@radix-ui/react-checkbox";

const CheckboxDemo = () => {
  const [checked, setChecked] = React.useState<boolean | string>(
    "indeterminate"
  );
  return (
    <form>
      <div className="flex items-center">
        <Checkbox
          className="flex size-[25px] appearance-none items-center justify-center rounded bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none focus:shadow-[0_0_0_2px_black]"
          checked={checked as boolean}
          onCheckedChange={setChecked}
          //   defaultChecked="indeterminate"
          // disabled
          id="c1"
        >
          <CheckboxIndicator>
            {checked === "indeterminate" && <DividerHorizontalIcon />}
            {checked === true && <CheckIcon />}
          </CheckboxIndicator>
        </Checkbox>
        <label
          className="pl-[15px] text-[15px] leading-none text-black"
          htmlFor="c1"
        >
          Accept terms and conditions.
        </label>
        <button
          className="text-blue-700"
          type="button"
          onClick={() =>
            setChecked((prevIsChecked) =>
              prevIsChecked === "indeterminate" ? false : "indeterminate"
            )
          }
        >
          Toggle indeterminate
        </button>
      </div>
    </form>
  );
};

export default CheckboxDemo;
