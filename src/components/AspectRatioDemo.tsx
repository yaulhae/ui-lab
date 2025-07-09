import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import * as React from "react";

const AspectRatioDemo = () => (
  <div className="flex flex-col md:flex-row w-full max-w-[900px] mx-auto gap-4 p-4">
    <div className="w-full md:w-1/3">
      <AspectRatio ratio={10 / 9}>
        <img
          className="size-full object-cover"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        />
      </AspectRatio>
    </div>
    <div className="w-full md:w-1/3">
      <AspectRatio ratio={16 / 9}>
        <img
          className="size-full object-cover"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        />
      </AspectRatio>
    </div>
    <div className="w-full md:w-1/3">
      <AspectRatio ratio={4 / 9}>
        <img
          className="size-full object-cover"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        />
      </AspectRatio>
    </div>
  </div>
);

export default AspectRatioDemo;
