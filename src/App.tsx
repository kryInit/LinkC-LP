import {Typography, Container, Box, CssBaseline} from "@mui/material";

import { HeroSection } from "./components/HeroSection";
import { BottomCTASection } from "./components/CTASection";
import { ConceptSection } from "./components/ConceptSection";
import { FeatureSection } from "./components/FeatureSection";
import { FAQSection } from "./components/FAQSection";
import { ThemeProvider, createTheme } from "@mui/material";
import { UIDetailsSection } from "./components/UIDetailsSection";
import { TopBar } from "./components/TopBar";
import { useRef } from "react";

const backgroundColor = "#FEF7EB";
const AppRoute = () => {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const faqRef = useRef(null);

    return (
        <>
            <CssBaseline />
            <TopBar heroRef={heroRef} aboutRef={aboutRef} servicesRef={servicesRef} faqRef={faqRef} />
            <Box ref={heroRef} mb={3} p={0}>
                <HeroSection />
            </Box>

            <Container maxWidth="xl">
                <Box ref={aboutRef} mb={3} bgcolor={backgroundColor} p={5}>
                    <ConceptSection />
                </Box>

                <Box mb={3} bgcolor={backgroundColor} p={5}>
                    <FeatureSection />
                </Box>

                <Box ref={servicesRef} mb={3} bgcolor={backgroundColor} p={2}>
                    <UIDetailsSection />
                </Box>

                <Box ref={faqRef} mb={3} bgcolor={backgroundColor} p={5}>
                    <FAQSection />
                </Box>

                <Box mb={3} bgcolor={backgroundColor} p={5}>
                    <BottomCTASection />
                </Box>
            </Container>

            <Typography
                align="center"
                color="textSecondary"
                style={{ opacity: 0.6, fontSize: "0.8rem" }}
                mb={3}
            >
                このサイトは愛とクッキーでできているから
                分けてあげられないんだ... ごめんね！ 🍪 2023
            </Typography>

            {/*<div style={{ height: "50vh" }} />*/}
            {/*<MaterialUISample />*/}
        </>
    );
};

const theme = createTheme({
    typography: {
        // fontFamily: "monospace",
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppRoute />
        </ThemeProvider>
    );
};

export default App;
