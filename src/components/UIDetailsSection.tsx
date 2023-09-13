import {Box, Grid, Typography} from "@mui/material";
import {ChatFrame, ProfileFrame} from "./AppUIFrame";

export const UIDetailsSection = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
        >
            <Grid container minWidth="260px" display="flex" alignItems="center" justifyContent="center" gap={10}>
                <Grid item
                      sx={{
                          overflow: 'hidden',
                          height: '400px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          marginTop: '-20px'
                      }}
                >
                    <Typography variant="h4" fontWeight="bold" position="absolute" mt={12}>
                        プロフィールを設定
                    </Typography>

                    <ProfileFrame scale={0.5} />
                </Grid>
                <Grid item
                      sx={{
                          overflow: 'hidden',
                          height: '400px',
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                          marginBottom: '-20px',
                      }}
                >
                    <ChatFrame scale={0.5} />
                    <Typography variant="h4" fontWeight="bold" position="absolute"     sx={{
                        transform: 'translate(0px, -100px)'
                    }}>
                        画面
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}