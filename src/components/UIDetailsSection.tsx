import {Grid, Typography} from "@mui/material";
import {ChatFrame, ProfileFrame} from "./AppUIFrame";

export const UIDetailsSection = () => {
    return (
        <Grid container display="flex" alignItems="center" justifyContent="center" gap={3}>
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
                <Typography variant="h4" fontWeight="bold" position="absolute" mt={5}>
                    プロフィールを設定
                </Typography>

                <ProfileFrame scale={1.0} />
            </Grid>
            <Grid item
                  sx={{
                      overflow: 'hidden',
                      height: '400px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      marginBottom: '-20px'
                  }}
            >
                <ChatFrame scale={1.0} />
                <Typography variant="h4" fontWeight="bold" position="absolute"     sx={{
                    transform: 'translate(0px, -40px)'
                }}>
                    画面
                </Typography>
            </Grid>
        </Grid>
    );
}