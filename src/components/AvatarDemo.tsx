"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import * as React from "react";

const AvatarDemo = () => (
  <div className="flex gap-5">
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Avatar
            className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle"
            asChild
          >
            <button onClick={() => alert("꺄악")}>
              <AvatarImage
                className="size-full rounded-[inherit] object-cover"
                src="https://images.unsplash.com/photo-nonexistent.jpg"
                alt="Colm Tuite"
              />
              <AvatarFallback
                className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
                delayMs={2000}
                asChild
              >
                <Link href="/dashboard">CT</Link>
              </AvatarFallback>
            </button>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          이미지 로드가 실패했을 때 뜨는 툴팁입니다!
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <Avatar
      className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle"
      asChild
    >
      <button onClick={() => alert("오미!!")}>
        <AvatarImage
          className="size-full rounded-[inherit] object-cover"
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="Pedro Duarte"
          onLoadingStatusChange={(status) => console.log("아바타 등장")}
        />
        <AvatarFallback
          className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
          delayMs={2000}
        >
          JD
        </AvatarFallback>
      </button>
    </Avatar>
    <Avatar className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
      <AvatarImage
        className="size-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
        onLoadingStatusChange={(status) => console.log("아바타 등장2")}
      />
      <AvatarFallback
        className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
        delayMs={2000}
      >
        PD
      </AvatarFallback>
    </Avatar>
  </div>
);

export default AvatarDemo;
