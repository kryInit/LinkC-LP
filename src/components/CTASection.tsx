import { Box, Grid, Typography } from "@mui/material";
import AppStoreLogo from "../assets/app-store-badge.svg";

type CTABatchProps = { height?: number };
const CTABatch = ({ height = 60 }: CTABatchProps) => {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
                <a href="http://play.google.com/store/dummy?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                    <img
                        alt="Google Play で手に入れよう"
                        src="https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png"
                        height={height}
                    />
                </a>
            </Grid>
            <Grid item>
                <Box
                    component="img"
                    src={AppStoreLogo}
                    alt="app store logo"
                    sx={{ height: `${height * 0.78}px` }}
                />
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
            <Typography variant="h4">Link Cを始めよう！</Typography>
            <CTABatch />
        </Box>
    );
};
