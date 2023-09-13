import IPhoneFrame from "../assets/iphone-frame.png";
import MainFrameCore from "../assets/MainFrameCore.svg";
import ThreadFrameCore from "../assets/ThreadFrameCore.svg";
import ChatFrameCore from "../assets/ChatFrameCore.svg";
import ProfileFrameCore from "../assets/ProfileFrameCore.svg";

import { Box } from "@mui/material";

type FrameProps = {
    scale: number;
};
type FrameHelperProps = {
    scale: number;
    FrameCore: () => undefined
    shadow: boolean
};
// todo: scaling
const FrameHelper = ({ scale, FrameCore, shadow }: FrameHelperProps) => {
    const transformStr = `scale(${scale})`;
    return (
        <Box position="relative" sx={{ transform: transformStr }} display="flex" justifyContent="center" alignItems="center">
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(0.990)",
                    borderRadius: "65px",
                    boxShadow: shadow ? '0px 50px 80px rgba(0, 0, 0, 0.3)' : '',
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

                <Box
                    component="img"
                    src={FrameCore}
                />
            </Box>
        </Box>
    );
};

export const MainFrame = ({ scale = 1.0, shadow = true }: FrameProps) => {
    return <FrameHelper scale={scale} FrameCore={MainFrameCore} shadow={shadow} />;
};

export const ThreadFrame = ({ scale = 1.0, shadow = true }: FrameProps) => {
    return <FrameHelper scale={scale} FrameCore={ThreadFrameCore} shadow={shadow} />;
};

export const ChatFrame = ({ scale = 1.0, shadow = true }: FrameProps) => {
    return <FrameHelper scale={scale} FrameCore={ChatFrameCore} shadow={shadow} />;
};

export const ProfileFrame = ({ scale = 1.0, shadow = true }: FrameProps) => {
    return <FrameHelper scale={scale} FrameCore={ProfileFrameCore} shadow={shadow} />;
}