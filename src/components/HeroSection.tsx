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
                    height: isMobile ? 450 : 600,
                    backgroundImage: `url(${HeroSectionImage})`,
                    // backgroundSize: "cover",
                    // backgroundPosition: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: isMobile ? "8%" : "1%",
                        left: isMobile ? "50%" : "9%",
                        transform: isMobile ? "translateX(-50%)" : "none",
                        color: "white",
                        height: { xs: 200, sm: 300, md: 300, lg: 330 },
                    }}
                    component="img"
                    src={LinkCIcon}
                    alt="app store logo"
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: { xs: "60%", sm: "55%" },
                        left: { xs: "5%", sm: "20%", md: "20%" },
                        color: "white",
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        align="left"
                        sx={{
                            color: "black",
                            fontSize: "1.15rem",
                        }}
                    >
                        授業情報を共有して
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="left"
                        sx={{
                            color: "black",
                            fontSize: "1.15rem",
                        }}
                    >
                        同学年の仲間と繋がるカレンダーアプリ
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
