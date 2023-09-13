import {Box, Grid, Typography} from "@mui/material";
import {ChatFrame, ProfileFrame, ThreadFrame} from "./AppUIFrame";

export const UIDetailsSection = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
        >
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                }}
            >
                <Box
                      sx={{
                          overflow: 'hidden',
                          minWidth: '450px',
                          height: '450px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          marginTop: '-20px',
                          position: "absolute"
                      }}
                >
                    <Typography variant="h4" fontWeight="bold"  mt={12}>
                        プロフィールを設定
                    </Typography>

                    <ProfileFrame scale={0.5} />
                </Box>

                <Box
                      sx={{
                          overflow: 'hidden',
                          minWidth: '450px',
                          height: '450px',
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                          marginBottom: '-20px',
                      }}
                >
                    <ThreadFrame scale={0.5} />
                    <Typography variant="h4" fontWeight="bold" position="absolute"     sx={{
                        transform: 'translate(0px, -100px)'
                    }}>
                        画面
                    </Typography>
                </Box>

                <Box
                      sx={{
                          overflow: 'hidden',
                          minWidth: '450px',
                          height: '450px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          marginTop: '-20px'
                      }}
                >
                    <Typography variant="h4" fontWeight="bold" position="absolute" mt={12}>
                        プロフィールを設定
                    </Typography>

                    <ChatFrame scale={0.5} />
                </Box>
            </Box>
        </Box>
    );
}