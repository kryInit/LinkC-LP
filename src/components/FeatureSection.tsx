import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ShareCalenderIcon from "../assets/link_calendar.png";
import ReactionIcon from "../assets/reaction.png";
import ChatIcon from "../assets/chat.png";
import {
    CalenderIcon,
    StreamIcon,
    TimetableIcon,
    ToDoListIcon,
    UsersIcon,
} from "./Icons";
import {ChatFrame, MainFrame, ThreadFrame} from "./AppUIFrame";
import AppStoreLogo from "../assets/app-store-badge.svg";

const cardSize = {
    width: 500,
    height: 550,
};

const data = [
    {
        overview: "多面的な情報管理",
        content: [
            {
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
            },
            {
                detail: "ユーザー間でカレンダー等を共有",
                icon: (
                    <Box
                        component="img"
                        src={ShareCalenderIcon}
                        alt="app store logo"
                        sx={{ height: "5em" }}
                    />
                ),
            }
        ],
        image: <MainFrame height={550}/>,
    },
    {
        overview: "情報交換の新しい形",
        content: [
            {
                detail: "トピックごとにスレッドを分け\n混乱なく効率的に情報共有",
                icon: (
                    <Box
                        component="img"
                        src={ChatIcon}
                        alt="app store logo"
                        sx={{ height: "5em" }}
                    />
                )
            },
            {
                detail: "ユーザーのいいねで\n情報の信頼性もチェック",
                icon: (
                    <Box
                        component="img"
                        src={ReactionIcon}
                        alt="app store logo"
                        sx={{ height: "5em" }}
                    />
                )
            }
        ],
        image: <ThreadFrame height={550}/>,
    },
    {
        overview: "交友の機会が広がる",
        content: [
            {
                detail:
                    "SNSへのスムーズな誘導や、時間割の共有機能で\n新しい友達やグループ活動のチャンスを増やす\n" +
                    "信頼性のバッジで安心のコミュニケーション",
                icon: <UsersIcon />,
            }
        ],
        image: <ChatFrame height={550}/>,
    },
];

const FeatureCard = ({overview, content}) => {
    return (
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
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <Typography
                    style={{ display: 'inline-block' }}  // ここを追加！
                    variant="h4"
                    fontWeight="Bold"
                    align="center"
                    mb={6}
                >
                    {overview}
                    {/*<Box*/}
                    {/*    width="60%"*/}
                    {/*    height="4px"*/}
                    {/*    bgcolor="black"*/}
                    {/*    mx="auto"*/}
                    {/*    // mt={2}  // 上のマージンを設定して、テキストから少し間を開けてみて*/}
                    {/*    mb={6}*/}
                    {/*/>*/}
                </Typography>



                <Box
                    display="flex" flexDirection="column" gap={5}
                >
                    {
                        content.map((item) => (
                            <Box>
                                {item.detail.split("\n").map((content, idx) => (
                                    <Typography
                                        key={idx}
                                        variant="body2"
                                        align="center"
                                        fontSize={18}
                                        gutterBottom
                                    >
                                        {content}
                                    </Typography>
                                ))}

                                <Box display="flex" justifyContent="center">
                                    {item.icon}
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </CardContent>
        </Card>
    );
}

const FeatureImage = ({image}) => {
    return (
        <Box
            height={cardSize.height}
            width={cardSize.width}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {image}
        </Box>
    );
}

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
                        <FeatureCard overview={item.overview} content={item.content}/>
                    </Grid>
                    <Grid item>
                        <FeatureImage image={item.image}/>
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
};
