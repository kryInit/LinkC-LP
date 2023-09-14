import {
    Typography,
    Box,
    CssBaseline,
    AppBar,
    Toolbar,
    IconButton,
    Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import AppLogo from "../assets/logo.png";

import { Menu } from "@mui/icons-material";

const Neko = () => {
    return (
        <>
            <Box
                component="div"
                sx={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        display: "inline-block",
                        userSelect: "none",
                    }}
                >
                    <img
                        src="https://pbs.twimg.com/media/EK8DkOTUcAIUHMG?format=jpg"
                        alt="shikaru neko"
                        style={{
                            maxWidth: "90vw",
                            maxHeight: "90vh",
                            display: "block",
                        }}
                    />
                    <Typography
                        component="div"
                        sx={{
                            color: "white",
                            position: "absolute",
                            width: "100%",
                            bottom: "5%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            textAlign: "center",
                            fontSize: "0.5em",
                            userSelect: "text",
                        }}
                    >
                        https://twitter.com/shikaruneko/status/1202183555293401088
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

const appBarTheme = createTheme({
    palette: {
        primary: { main: "#003356" },
        text: {
            primary: "#e3e1d6",
        },
    },
});

const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
};

export const TopBar = ({ heroRef, aboutRef, servicesRef, faqRef }) => {
    const [rotationDegree, setRotationDegree] = useState(0);
    const [clickCount, setClickCount] = useState(0);
    const [showImage, setShowImage] = useState(false);
    const [prevClickCleaner, setPrevClickCleaner] = useState(-1);

    const handleMenuClick = () => {
        setRotationDegree((prev) => (prev === 0 ? 3600 : 0));
        setClickCount((prevCount) => prevCount + 1);
    };
    useEffect(() => {
        if (clickCount === 1) {
            if (prevClickCleaner !== -1) {
                clearTimeout(prevClickCleaner);
            }
            setPrevClickCleaner(setTimeout(() => setClickCount(0), 1000));
        }
        if (clickCount >= 4) {
            setShowImage(true);
            setClickCount(0);
            setTimeout(() => setShowImage(false), 3000);
        }
    }, [clickCount]);

    return (
        <>
            {showImage && <Neko />}
            <ThemeProvider theme={appBarTheme}>
                <AppBar position="sticky" elevation={0}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                                transform: `rotate(${rotationDegree}deg)`,
                                transition: "transform 5s",
                                color: appBarTheme.palette.text.primary,
                            }}
                            onClick={handleMenuClick}
                        >
                            <Menu />
                        </IconButton>
                        {/*<Box*/}
                        {/*    component="img"*/}
                        {/*    src={AppLogo}*/}
                        {/*    sx={{ height: "2em" }}*/}
                        {/*    mr={1}*/}
                        {/*/>*/}
                        <Box flexGrow={1} sx={{ color: appBarTheme.palette.text.primary }}>
                            <Button
                                color="inherit"
                                onClick={() => handleScroll(heroRef)}
                            >
                                <Typography variant="h6" sx={{ textTransform: 'none' }}>
                                    Link C
                                </Typography>
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "flex",
                                },
                                color: appBarTheme.palette.text.primary,
                            }}
                        >
                            <Button
                                color="inherit"
                                onClick={() => handleScroll(aboutRef)}
                            >
                                About
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => handleScroll(servicesRef)}
                            >
                                Services
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => handleScroll(faqRef)}
                            >
                                FAQ
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    );
};
