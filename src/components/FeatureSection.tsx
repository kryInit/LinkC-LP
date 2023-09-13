import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import {
    CalenderIcon,
    StreamIcon,
    TimetableIcon,
    ToDoListIcon,
    UsersIcon,
} from "./Icons";
import HeroSectionImage from "../assets/HeroSectionImage.png";
import React from "react";

const cardSize = {
    width: 600,
    height: 350,
};

const data = [
    {
        overview: "多面的な情報管理",
        detail: "時間割・カレンダー・todoの3つの形式で\n履修から試験までのすべての情報を一元管理",
        icon: (
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <TimetableIcon />
                </Grid>
                <Grid item>
                    <CalenderIcon />
                </Grid>
                <Grid item style={{ marginTop: "4px" }}>
                    <ToDoListIcon height="3.8em" />
                </Grid>
            </Grid>
        ),
        image: HeroSectionImage,
    },
    {
        overview: "情報交換の新しい形",
        detail: "トピックごとにスレッドを分け混乱なく効率的に情報共有\nさらに、ユーザーのいいねで情報の信頼性もチェック",
        icon: <StreamIcon />,
        image: HeroSectionImage,
    },
    {
        overview: "交友の機会が広がる",
        detail:
            "SNSへのスムーズな誘導や、時間割の共有機能で\n新しい友達やグループ活動のチャンスを増やす\n" +
            "信頼性のバッジで安心のコミュニケーション",
        icon: <UsersIcon />,
        image: HeroSectionImage,
    },
];

export const FeatureSection = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            {data.map((item, index) => (
                <Grid
                    container
                    key={index}
                    my={2}
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item>
                        <Card
                            variant="outlined"
                            style={{
                                width: cardSize.width,
                                height: cardSize.height,
                                display: "flex",
                                alignItems: "center",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                borderRadius: "15px",
                            }}
                        >
                            <CardContent
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "70%",
                                    width: "100%",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    fontWeight="Bold"
                                    align="center"
                                    gutterBottom
                                >
                                    {item.overview}
                                </Typography>

                                <div>
                                    {item.detail.split("\n").map((d, idx) => (
                                        <Typography
                                            key={idx}
                                            variant="body2"
                                            align="center"
                                            fontSize={18}
                                            gutterBottom
                                        >
                                            {d}
                                        </Typography>
                                    ))}
                                </div>

                                <Box display="flex" justifyContent="center">
                                    {item.icon}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Box
                            height={cardSize.height}
                            width={cardSize.width}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img
                                src={item.image}
                                alt="画像"
                                style={{ maxHeight: "100%", maxWidth: "100%" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
};
