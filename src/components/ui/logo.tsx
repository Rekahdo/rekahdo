import { cva } from "class-variance-authority";

const logoVariants = cva(
    "",
    {
        variants:{
            variant:{
                header:""
            },
            size: {
                normal:""
            }
        },
        defaultVariants:{
            variant:"header",
            size:"normal",
        }
    }
)

// function Logo({})


