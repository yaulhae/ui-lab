import * as React from "react";
import {
  Slider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@radix-ui/react-slider";

const SliderDemo = () => (
  <form>
    <Slider
      className="relative flex h-5 w-[200px] touch-none select-none items-center"
      defaultValue={[40, 80]}
      minStepsBetweenThumbs={5}
      //   max={100}
      step={10}
      onValueCommit={() => console.log("이동완료")}
      //   dir="rtl"
      //   inverted={true}
    >
      <SliderTrack className="relative h-[3px] grow rounded-full bg-black">
        <SliderRange className="absolute h-full rounded-full bg-blue-800" />
      </SliderTrack>
      <SliderThumb
        className="block size-5 rounded-[10px] bg-blue-800 shadow-[0_2px_10px] shadow-black hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-black focus:outline-none"
        aria-label="Volume"
      />
      <SliderThumb
        className="block size-5 rounded-[10px] bg-blue-800 shadow-[0_2px_10px] shadow-black hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-black focus:outline-none"
        aria-label="Volume"
      />
    </Slider>
  </form>
);

export default SliderDemo;
