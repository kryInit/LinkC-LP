import { Box, Typography } from "@mui/material";

import HeroSectionImage from "../assets/HeroSectionImage.png";
import React from "react";

import { TOPCTASection } from "./CTASection";

export const HeroSection = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "500px",
                backgroundImage: `url(${HeroSectionImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "65%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
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
                <TOPCTASection />
            </Box>
        </Box>
    );
};
