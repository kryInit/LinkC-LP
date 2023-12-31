import IPhoneFrame from "../assets/iphone-frame.png";
import ProfileFrameCore from "../assets/frames/ProfileFrameCore.svg";
import CalenderFrameCore from "../assets/frames/CalenderFrameCore.svg";
import ToDoFrameCore from "../assets/frames/ToDoFrameCore.svg";
import AddToDoFrameCore from "../assets/frames/AddToDoFrameCore.svg";
import CourseFrameCore from "../assets/frames/CourseFrameCore.svg";
import ThreadFrameCore from "../assets/frames/ThreadFrameCore.svg";
import CreateThreadFrameCore from "../assets/frames/CreateThreadFrameCore.svg";
import ChatFrameCore from "../assets/frames/ChatFrameCore.svg";

import { Box } from "@mui/material";
import React from "react";

type FrameProps = {
    scale?: number;
    shadow?: boolean;
};

const FrameGenerator = (FrameCore: () => undefined): React.FC<FrameProps> => {
    return ({ scale = 1.0, shadow = true }) => (
        <Box
            position="relative"
            sx={{ transform: `scale(${scale})` }}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(0.990)",
                    borderRadius: "65px",
                    boxShadow: shadow ? "0px 50px 80px rgba(0, 0, 0, 0.3)" : "",
                }}
                component="img"
                src={IPhoneFrame}
                height={844}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
                zIndex={2}
                component="img"
                src={IPhoneFrame}
                height={844}
            />
            <Box sx={{ transform: "scale(0.95)" }}>
                <Box component="img" src={FrameCore} />
            </Box>
        </Box>
    );
};

export const [
    ProfileFrame,
    CalenderFrame,
    ToDoFrame,
    AddToDoFrame,
    CourseFrame,
    ThreadFrame,
    CreateThreadFrame,
    ChatFrame,
] = [
    ProfileFrameCore,
    CalenderFrameCore,
    ToDoFrameCore,
    AddToDoFrameCore,
    CourseFrameCore,
    ThreadFrameCore,
    CreateThreadFrameCore,
    ChatFrameCore,
].map(FrameGenerator);
