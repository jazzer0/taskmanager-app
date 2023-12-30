import { ComponentStyleConfig } from "@chakra-ui/react";
import defaultColors from "../defaultColors";

export const CustomButton: ComponentStyleConfig = {
    defaultProps: {
        size: "sm",
    },
    variants: {
        "danger": {
            bg: "red",
            color: defaultColors.dark[100]
        },
    },
}