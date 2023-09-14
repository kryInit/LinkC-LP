import {
    Typography,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import AppLogo from "../assets/transparent_log.svg";
import { LinkC } from "./Utils";

import { Menu } from "@mui/icons-material";

const Nya = () => {
    return (
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
            <Box>
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
                        fontSize: { xs: "0.6em", sm: "0.8em", xm: "1em" },
                    }}
                >
                    https://twitter.com/shikaruneko/status/1202183555293401088
                </Typography>
            </Box>
        </Box>
    );
};

const appBarTheme = createTheme({
    palette: {
        primary: { main: "#003356" },
        text: { primary: "#e3e1d6" },
    },
});

const handleScroll = (ref) => {
    const offset = -80;
    const topPosition =
        ref.current.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: topPosition, behavior: "smooth" });
};

export const TopBar = ({ aboutRef, servicesRef, faqRef }) => {
    const [clickCount, setClickCount] = useState(0);
    const [rotationDegree, setRotationDegree] = useState(0);
    const [showImage, setShowImage] = useState(false);
    const [prevClickCleaner, setPrevClickCleaner] = useState(-1);

    const handleMenuClick = () => {
        setRotationDegree((prev) => (prev === 0 ? 3600 : 0));
        setClickCount((prevCount) => prevCount + 1);
    };
    useEffect(() => {
        if (clickCount === 1) {
            if (prevClickCleaner !== -1) clearTimeout(prevClickCleaner);
            setPrevClickCleaner(setTimeout(() => setClickCount(0), 1000));
        }
        if (clickCount >= 4) {
            setShowImage(true);
            setClickCount(0);
            setTimeout(() => setShowImage(false), 3000);
        }
    }, [clickCount]);

    const appBarContents = [
        { title: "About", ref: aboutRef },
        { title: "Services", ref: servicesRef },
        { title: "FAQ", ref: faqRef },
    ];

    return (
        <>
            {showImage && <Nya />}
            <ThemeProvider theme={appBarTheme}>
                <AppBar position="sticky" elevation={10}>
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
                        <Box
                            component="img"
                            src={AppLogo}
                            sx={{ height: "2em" }}
                            mr={2}
                        />
                        <Box
                            flexGrow={1}
                            sx={{ color: appBarTheme.palette.text.primary }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ textTransform: "none" }}
                            >
                                <LinkC />
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                color: appBarTheme.palette.text.primary,
                            }}
                        >
                            {appBarContents.map((content, index) => (
                                <Button
                                    key={index}
                                    color="inherit"
                                    onClick={() => handleScroll(content.ref)}
                                >
                                    {content.title}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    );
};
