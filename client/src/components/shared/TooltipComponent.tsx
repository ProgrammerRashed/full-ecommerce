import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"


const TooltipComponent = ({content, children}:any) => {
  return (
    <div>
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    </div>
  )
}

export default TooltipComponent
