import { Box, Typography } from "@mui/material";

const FAQBackgroundColor = "#F7FCFE";
const faqData = [
    {
        question: "このアプリは無料ですか？",
        answer: "はい、基本的な機能は無料でご利用いただけます。一部の追加機能については有料オプションとして提供しています。",
    },
    {
        question: "プライバシーは保護されていますか？",
        answer: "当アプリはユーザーのプライバシーを最優先に考慮して設計されています。情報の共有は各ユーザーの設定に基づいて行われ、第三者との情報共有は絶対に行いません。",
    },
    {
        question: "他のユーザーと情報を共有することは強制されますか？",
        answer: "いいえ、情報の共有は完全に任意です。ご自身のプライバシー設定や共有設定をカスタマイズして、お好みに合わせて利用いただけます。",
    },
    {
        question: "トピックごとのスレッドは誰でも作成できますか？",
        answer: "はい、ユーザーは関心のあるトピックに関する新しいスレッドを自由に作成できます。しかし、コミュニティのガイドラインに違反する内容はモデレーションの対象となります。",
    },
    {
        question: "「いいね」機能の信頼性はどれくらいですか？",
        answer: "「いいね」機能はユーザーコミュニティの反応を示すためのものです。情報の正確性を100%保証するものではありませんので、重要な情報に関しては、必ず公式な情報源や教育機関での確認をおすすめします。",
    },
];

export const FAQSection = () => {
    return (
        <Box display="flex" justifyContent="center">
            <Box
                bgcolor={FAQBackgroundColor}
                p={4}
                borderRadius={2}
                boxShadow={3}
                sx={{ minWidth: "260px", maxWidth: "800px", margin: "auto" }}
            >
                <Box mb={3} textAlign="center">
                    <Typography variant="h4" component="h2" fontWeight="bold">
                        FAQ
                    </Typography>
                    <Box
                        mt={1}
                        width="60px"
                        height="2px"
                        bgcolor="#333"
                        mx="auto"
                    />
                </Box>

                {faqData.map((faq, index) => (
                    <Box
                        key={index}
                        sx={{
                            marginBottom: 4,
                            padding: 2,
                            border: "1px solid #ddd",
                            borderRadius: 1,
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            marginBottom={1}
                        >
                            Q: {faq.question}
                        </Typography>
                        <Typography variant="body1" marginBottom={2}>
                            A: {faq.answer}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
