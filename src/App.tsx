import {
    AppBar,
    Toolbar,
    Typography,
    Card,
    CardContent,
    Container,
    Button,
    Grid,
    Box,
} from "@mui/material";

import { HeroSection } from "./components/HeroSection";
import { BottomCTASection } from "./components/CTASection";
import { ConceptSection } from "./components/ConceptSection";
import { FeatureSection } from "./components/FeatureSection";
import { FAQSection } from "./components/FAQSection";
import { ThemeProvider, createTheme } from "@mui/material";
import { UIDetailsSection } from "./components/UIDetailsSection";

const MaterialUISample = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">My Cool Product</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Box my={4}>
                    <Typography variant="h3" gutterBottom>
                        Welcome to My Product!
                    </Typography>
                    <Typography variant="subtitle1">
                        We offer the best features for you. Explore below!
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Feature 1</Typography>
                                <Typography>
                                    Description for feature 1.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Feature 2</Typography>
                                <Typography>
                                    Description for feature 2.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Feature 3</Typography>
                                <Typography>
                                    Description for feature 3.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box mt={4}>
                    <Button variant="contained" color="primary">
                        Learn More
                    </Button>
                </Box>
            </Container>
        </div>
    );
};

const theme = createTheme({
    typography: {
        fontFamily: "monospace, Source Code Pro",
    },
});

const backgroundColor = "#FEF7EB";
const AppRoute = () => {
    return (
        <>
            <Box mb={3} p={0}>
                <HeroSection />
            </Box>

            <Container maxWidth="xl">
                <Box mb={3} bgcolor={backgroundColor} p={5}>
                    <ConceptSection />
                </Box>

                <Box mb={3} bgcolor={backgroundColor} p={5}>
                    <FeatureSection />
                </Box>

                <Box mb={3} bgcolor={backgroundColor} p={2}>
                    <UIDetailsSection />
                </Box>

                <Box mb={3} bgcolor={backgroundColor} p={5}>
                    <FAQSection />
                </Box>

                <Box mb={3} bgcolor={backgroundColor} p={5}>
                    <BottomCTASection />
                </Box>
            </Container>

            {/*<Box sx={{                          overflow: 'hidden',*/}
            {/*    clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'}}>*/}
            {/*    <ThreadFrame scale={0.7} />,*/}
            {/*</Box>*/}
            {/*<Box sx={{            clipPath: 'polygon(0 0, 100% 0, 0 100%)', // 下部を斜めにカット*/}
            {/*}}>*/}
            {/*    <ThreadFrame scale={0.7}/>*/}
            {/*</Box>*/}

            {/*<Box height="50%" overflow="hidden">*/}
            {/*    <ChatFrame scale={1.0} />*/}
            {/*</Box>*/}

            <Typography
                align="center"
                color="textSecondary"
                style={{ opacity: 0.6, fontSize: "0.8rem" }}
            >
                このサイトは愛とクッキーでできているから、分けてあげられないんだ...
                ごめんね！ 🍪 2023
            </Typography>

            {/*<div style={{ height: "50vh" }} />*/}
            {/*<MaterialUISample />*/}
        </>
    );
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppRoute />
        </ThemeProvider>
    );
};

export default App;
