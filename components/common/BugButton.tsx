import { Button } from "@nextui-org/react"
import { BugButtonProps } from "@/types"


export const BugButton: React.FC<BugButtonProps> = ({
    size = "lg",
    label="Button",
    destination,
    clickHandler,
    isIconOnly = false,
    iconStart,
    iconEnd,
    isDisabled = false,
    isLoading = false,
    fullWidth = true,
    id,
}) => {

    return (
        <Button
            size={size}
            href={destination + "/" + id}
            color="primary"
            className="w-full font-bold py-2 px-4  h-12 px-6 transition-colors duration-150 rounded-md focus:shadow-outline "
            startContent={iconStart}
            endContent={iconEnd}
            fullWidth={fullWidth}
            isIconOnly={isIconOnly}
            isDisabled={isDisabled}
            isLoading={isLoading}
            onClick={clickHandler}
        >
           <span className="w-full">  {label}  </span>

        </Button>


    )}