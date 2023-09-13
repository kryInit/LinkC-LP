import { useMediaQuery, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import LinkCIcon from "../assets/appimage3.png";

import HeroSectionImage from "../assets/HeroSectionImage.png";

import { TOPCTASection } from "./CTASection";

export const HeroSection = () => {
    // const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    height: isMobile ? 500 : 600,
                    backgroundImage: `url(${HeroSectionImage})`,
                    // backgroundSize: "cover",
                    // backgroundPosition: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "1%",
                        left: "9%",
                        color: "white",
                        height: { xs: 200, md: 300, lg: 350 },
                    }}
                    component="img"
                    src={LinkCIcon}
                    alt="app store logo"
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: "60%",
                        left: { xs: "5%", md: "20%" },
                        color: "white",
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        align="left"
                        sx={{
                            color: "black",
                            fontSize: "1.5rem",
                        }}
                    >
                        繋がりを生む時間割アプリ
                    </Typography>
                    <Typography
                        variant="h3"
                        align="left"
                        sx={{
                            color: "black",
                            fontSize: "4rem",
                            marginBottom: "3rem",
                        }}
                    >
                        Link C
                    </Typography>
                    {!isMobile ? <TOPCTASection /> : <></>}
                </Box>
            </Box>
            {isMobile ? <TOPCTASection /> : <></>}
        </>
    );
};
