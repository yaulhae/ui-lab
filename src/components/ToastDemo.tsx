import * as React from "react";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@radix-ui/react-toast";

const ToastDemo = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastProvider swipeDirection="left" swipeThreshold={300}>
      <button
        className="inline-flex h-[35px] items-center justify-center rounded bg-white px-[15px] text-[15px] font-medium leading-[35px] text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </button>

      <Toast
        className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        onOpenChange={setOpen}
        onPause={() => console.log("일시정지")}
        onResume={() => console.log("일시정지 해제")}
        onSwipeStart={() => console.log("스와이프 시작")}
        onSwipeMove={() => console.log("스와이프 이동")}
        onSwipeEnd={() => console.log("스와이프 종료")}
        onSwipeCancel={() => console.log("스와이프 도중 취소")}
      >
        <ToastTitle className="mb-[5px] text-[15px] font-medium text-slate12 [grid-area:_title]">
          Scheduled: Catch up
        </ToastTitle>
        <ToastDescription asChild>
          <time
            className="m-0 text-[13px] leading-[1.3] text-slate11 [grid-area:_description]"
            dateTime={eventDateRef.current.toISOString()}
          >
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastDescription>
        <ToastAction
          className="[grid-area:_action]"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="inline-flex h-[25px] items-center justify-center rounded bg-green2 px-2.5 text-xs font-medium leading-[25px] text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
            Undo
          </button>
        </ToastAction>
      </Toast>
      <ToastViewport
        hotkey={["F8"]}
        className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]"
      />
    </ToastProvider>
  );
};

function oneWeekAway(): Date {
  const now = new Date();
  now.setDate(now.getDate() + 7); // ⚠️ 이미 now를 수정하므로 반환은 그대로
  return now;
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

export default ToastDemo;
