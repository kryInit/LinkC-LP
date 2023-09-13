import { Box, Typography, Grid } from "@mui/material";
import TroubleStudentIcon from "../assets/trouble_student.png";

export const ConceptSection = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="inline-block" position="relative" mb={2}>
                <Typography variant="h5" mb={1} color={"#EF8640"}>
                    大学生の皆さん
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                    こんなお悩みはありませんか？
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
            <Grid
                container
                spacing={2}
                sx={{
                    // display: "flex",
                    // justifyContent: "center",
                    width: "70%",
                    alignItems: "center",
                }}
            >
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" textAlign="center" mb={6}>
                        友達がいないし、作るきっかけもない
                    </Typography>
                    <Typography variant="h5" textAlign="center">
                        誰にも聞けないから授業情報がわからない
                    </Typography>
                </Grid>

                {/* 画像1 */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Box
                        component="img"
                        src={TroubleStudentIcon}
                        sx={{ height: 300 }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
