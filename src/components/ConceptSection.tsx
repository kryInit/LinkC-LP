import { Box, Typography } from "@mui/material";
import React from "react";

export const ConceptSection = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="inline-block" position="relative" mb={2}>
                <Typography variant="h4" component="h1" fontWeight="bold">
                    学びとつながりの新しいスタイル
                </Typography>
                <Box
                    position="absolute"
                    bottom={-2}
                    left={0}
                    width="100%"
                    height="2px"
                    bgcolor="#333"
                />
            </Box>
            <Typography variant="body1" textAlign="center">
                あなたの時間割から、仲間との最適な時間を発見。学業も交流も手放さない
            </Typography>
        </Box>
    );
};
