import {Box, Grid, Typography} from "@mui/material";
import {ProfileFrame, CalenderFrame, ToDoFrame, CreateThreadFrame, ThreadFrame, CourseFrame, ChatFrame, AddToDoFrame } from "./AppUIFrame";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import {strongMainColor} from "./Utils";

type DetailedFrameProps = {
    Frame: () => JSX.Element
    expl: string
    top_justified?: boolean
};

const DetailedFrame = ({Frame, expl, top_justified = true}: DetailedFrameProps) => {
    return (
        <Box
            sx={{
                overflow: 'hidden',
                minWidth: '450px',
                height: '480px',
                display: 'flex',
                position: "relative",
                alignItems: top_justified ? 'flex-start' : 'flex-end',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h4" fontWeight="bold" position="absolute" mt={7} sx={{
                transform: top_justified ? '' : 'translate(0px, -40px)'
            }}>
                {expl}
            </Typography>

            <Frame />
        </Box>
    );
}

export const UIDetailsSection = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" fontWeight="bold" mt={3} mb={3}>
                <span style={{ color: strongMainColor }}>Link C </span>
                を使ってみましょう！
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                }}
                mb={10}
            >
                <DetailedFrame Frame={() => <CalenderFrame scale={0.7}/>} expl={"カレンダー"} />
                <DetailedFrame
                    Frame={() =>
                        <Box position="relative">
                            <Box position="absolute" marginLeft={-20} marginTop={0}>
                                <AddToDoFrame scale={0.7}/>
                            </Box>
                            <Box position="absolute" marginLeft={-34} marginTop={13}>
                                <ToDoFrame scale={0.7}/>
                            </Box>
                        </Box>
                    }
                    expl={"画面"}
                />

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                }}
            >
                <DetailedFrame Frame={() => <ProfileFrame scale={0.7}/>} expl={"プロフィールを設定"} />
                <DetailedFrame
                    Frame={() =>
                        <Box position="relative">
                            <Box position="absolute" marginLeft={-34} marginTop={0}>
                                <CourseFrame scale={0.7}/>
                            </Box>
                            <Box position="absolute" marginLeft={-24} marginTop={10}>
                                <ThreadFrame scale={0.7}/>
                            </Box>
                            <Box position="absolute" marginLeft={-14} marginTop={20}>
                                <CreateThreadFrame scale={0.7}/>
                            </Box>
                        </Box>
                    }
                    expl={"画面"}
                />
                <DetailedFrame
                    Frame={() =>
                        // <Box position="relative">
                        //     <Box marginBottom={-0}>
                                <ChatFrame scale={0.7}/>
                            // </Box>
                         // </Box>
                    }
                    expl={"会話"}
                    top_justified={false}
                />
            </Box>
        </Box>
    );
}