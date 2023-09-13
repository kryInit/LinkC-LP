import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ShareCalenderIcon from "../assets/link_calendar.png";
import ReactionIcon from "../assets/reaction.png";
import ChatIcon from "../assets/chat.png";
import FriendIcon from "../assets/friend.png";
import {
    CommentsIcon,
    CalenderIcon,
    TimetableIcon,
    ToDoListIcon,
} from "./Icons";
import {
    ChatFrame,
    CalenderFrame,
    ProfileFrame,
    ThreadFrame,
} from "./AppUIFrame";
import { mainColor, strongMainColor } from "./Utils";

// todo: 流石に汚くなってきたからなんとかしたい

const cardSize = {
    width: { xs: 340, md: 450, lg: 500 },
    height: 550,
};
const frameSize = {
    width: 340,
    height: { xs: 650, md: 600, lg: 600 },
};

const features = [
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
                        sx={{ height: "5em" }}
                    />
                ),
            },
        ],
        image: <CalenderFrame scale={0.7} />,
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
                        sx={{ height: "5em" }}
                    />
                ),
            },
            {
                detail: "ユーザーのいいねで\n情報の信頼性もチェック",
                icon: (
                    <Box
                        component="img"
                        src={ReactionIcon}
                        sx={{ height: "6.5em" }}
                    />
                ),
            },
        ],
        image: (
            <Box
                sx={{
                    justifyContent: " center",
                    position: "relative",
                    display: "flex",
                    width: "100%",
                    height: "140%",
                }}
            >
                {/*<Box*/}
                {/*    sx={{*/}
                {/*        position: "absolute",*/}
                {/*        top: "50%",*/}
                {/*        left: "50%",*/}
                {/*        transform: "translate(-50%, -50%) scale(0.7)",*/}
                {/*        borderRadius:" 65px",*/}
                {/*        bgcolor: 'black'*/}
                {/*    }}*/}
                {/*    height={750}*/}
                {/*    width={372}*/}
                {/*/>*/}
                {/*<Box*/}
                {/*    sx={{*/}
                {/*        position: "absolute",*/}
                {/*        top: "50%",*/}
                {/*        left: "50%",*/}
                {/*        transform: "translate(-50%, -50%) scale(0.787)",*/}
                {/*        borderRadius:" 65px",*/}
                {/*        boxShadow: '0px 50px 80px rgba(0, 0, 0, 0.3)',*/}
                {/*    }}*/}
                {/*    component="img"*/}
                {/*    src={IPhoneFrame}*/}
                {/*    height={750}*/}
                {/*    width={372}*/}
                {/*/>*/}

                <Box
                    sx={{
                        position: "absolute",
                        // marginTop: "-9%",
                        clipPath: "polygon(0% 0%, 0% 51%, 100% 31%, 100% 0%)",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                    }}
                >
                    <ThreadFrame scale={0.7} shadow={true} />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        clipPath:
                            "polygon(0% 100%, 0% 53%, 100% 33%, 100% 100%)",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                    }}
                >
                    <ChatFrame scale={0.7} shadow={true} />
                </Box>
            </Box>
        ),
    },
    {
        overview: "交友の機会が広がる",
        content: [
            {
                detail: "SNSへのスムーズな誘導や、時間割の共有機能で\n新しい友達やグループ活動のチャンスを増やす\n",
                icon: <CommentsIcon />,
            },
            {
                detail: "信頼関係を築いてもっと仲良くなれる！",
                icon: (
                    <Box
                        component="img"
                        src={FriendIcon}
                        sx={{ height: "4em" }}
                    />
                ),
            },
        ],
        image: <ProfileFrame scale={0.7} />,
    },
];

const FeatureCard = ({ overview, content }) => {
    return (
        <Card
            variant="outlined"
            sx={{
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
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="Bold"
                    position="relative"
                    mb={8}
                >
                    {overview}
                    <Box
                        position="absolute"
                        width="120%"
                        left="-10%"
                        height="4px"
                        bgcolor={mainColor}
                        mx="auto"
                        mt={1}
                    />
                </Typography>

                <Box display="flex" flexDirection="column" gap={5}>
                    {content.map((item) => (
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
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

const FeatureImage = ({ image }) => {
    return (
        <Box
            sx={{
                width: frameSize.width,
                height: frameSize.height,
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {image}
        </Box>
    );
};

export const FeatureSection = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="inline-block" position="relative" mb={2}>
                <Typography variant="h4" fontWeight="bold" mt={3} mb={3}>
                    そんな孤独で不安な大学生を助けるのが
                    <Box display="inline-block" position="relative" mb={2}>
                        <span style={{ color: strongMainColor }}>Link C</span>
                        {/*<Box*/}
                        {/*    position="absolute"*/}
                        {/*    width="110%"*/}
                        {/*    left="-5%"*/}
                        {/*    height="4px"*/}
                        {/*    bgcolor="#333"*/}
                        {/*    mx="auto"*/}
                        {/*    mt={1}*/}
                        {/*/>*/}
                    </Box>
                </Typography>
            </Box>

            {features.map((item, index) => (
                <Grid
                    container
                    key={index}
                    my={2}
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item>
                        <FeatureCard
                            overview={item.overview}
                            content={item.content}
                        />
                    </Grid>
                    <Grid item>
                        <FeatureImage image={item.image} />
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
};
