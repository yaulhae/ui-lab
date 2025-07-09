"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const AccordionDemo = () => (
  <Accordion
    className="w-[300px] rounded-md bg-mauve6 shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    // onValueChange={(value) => console.log("헤이")}
    // collapsible
    // disabled
    // dir="ltr"
    // orientation="horizontal"
  >
    <AccordionItemDemo value="item-1">
      <AccordionTriggerDemo>Is it accessible?</AccordionTriggerDemo>
      <AccordionContentDemo className="AccordionContent py-[5px]">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContentDemo>
    </AccordionItemDemo>

    <AccordionItemDemo value="item-2">
      <AccordionTriggerDemo>Is it unstyled?</AccordionTriggerDemo>
      <AccordionContentDemo className="AccordionContent">
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContentDemo>
    </AccordionItemDemo>

    <AccordionItemDemo value="item-3">
      <AccordionTriggerDemo>Can it be animated?</AccordionTriggerDemo>
      <AccordionContentDemo
        forceMount={true}
        className="data-[state=closed]:hidden"
      >
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContentDemo>
    </AccordionItemDemo>
  </Accordion>
);

export default AccordionDemo;

const AccordionItemDemo = React.forwardRef<
  React.ElementRef<typeof AccordionItem>, // ref 타입
  React.ComponentPropsWithoutRef<typeof AccordionItem> // props 타입
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionItem
    className={classNames(
      "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </AccordionItem>
));

const AccordionTriggerDemo = React.forwardRef<
  React.ElementRef<typeof AccordionTrigger>, // ref 타입
  React.ComponentPropsWithoutRef<typeof AccordionTrigger> // props 타입
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionHeader className="flex">
    <AccordionTrigger
      className={classNames(
        "group flex h-[45px] flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-[15px] leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </AccordionTrigger>
  </AccordionHeader>
));

const AccordionContentDemo = React.forwardRef<
  React.ElementRef<typeof AccordionContent>, // ref 타입
  React.ComponentPropsWithoutRef<typeof AccordionContent> // props 타입
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionContent
    className={classNames(
      "overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="px-5 py-[15px]">{children}</div>
  </AccordionContent>
));
