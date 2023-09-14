import { Box, Grid, Typography } from "@mui/material";
import AppStoreLogo from "../assets/app-store-badge.svg";
import { strongMainColor } from "./Utils";
import TroubleStudentImage from "../assets/trouble_student.png";
import FriendChatImage from "../assets/friend_chat.png";

type CTABatchProps = { height?: number | undefined };

const GooglePlayBatch = ({ height = 60 }: CTABatchProps) => {
    return (
        <a href="https://play.google.com/store/apps/details?id=org.hempuli.baba">
            <img
                alt="Google Play で手に入れよう"
                src="https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png"
                height={height}
            />
        </a>
    );
};
const AppStoreBatch = ({ height = 60 }: CTABatchProps) => {
    return (
        <a href="https://apps.apple.com/jp/app/baba-is-you/id1517281887">
            <Box
                component="img"
                src={AppStoreLogo}
                alt="app store logo"
                sx={{ height: `${height * 0.78}px` }}
            />
        </a>
    );
};

const CTABatch = ({ height = 60 }: CTABatchProps) => {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
                <GooglePlayBatch height={height} />
            </Grid>
            <Grid item>
                <AppStoreBatch height={height} />
            </Grid>
        </Grid>
    );
};

export const TOPCTASection = () => {
    return <CTABatch />;
};

export const BottomCTASection = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" fontWeight="bold" mb={4}>
                <span style={{ color: strongMainColor }}>Link C</span>{" "}
                を始めよう！
            </Typography>
            <Box
                component="img"
                src={FriendChatImage}
                sx={{ height: 250 }}
                mb={4}
            />
            <Typography variant="h5" mb={4}>
                授業も安心、友達との楽しいキャンパスライフを！
            </Typography>
            <CTABatch />
        </Box>
    );
};
