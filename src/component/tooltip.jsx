import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../component/tooltip";
import { Button } from "../component/button";

export default function Example() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="bg-blue-600 text-white">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          This is a tooltip!
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
