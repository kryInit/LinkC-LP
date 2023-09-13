import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faList, faStream, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";

// 単位は保持し、値のみを変換する, なんかもっといい命名ないかな
const convertSize = (
    sizeStr: string,
    converter: (sizeValue: number) => number,
): string | undefined => {
    const match = sizeStr.match(/^(\d+\.?\d*)(px|em|rem|%)?$/);

    if (!match) return undefined;

    const value = parseFloat(match[1]);
    const unit = match[2] || "";

    return converter(value) + unit;
};

// fontawesomeのfa calender altを時間割アイコンとして使用
export const TimetableIcon = ({ height = "4em" }) => {
    // なぜかfaCalendarAltがfaCalendarDaysになってしまうのでsvgを直接使用
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 0 448 512"
        >
            <path d="M149 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
        </svg>
    );
};

// fontawesomeのカレンダーに数字を載せてカレンダーアイコンとして使用
export const CalenderIcon = ({ height = "4em" }) => {
    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <FontAwesomeIcon icon={faCalendar} style={{ height: height }} />
            <Typography
                style={{
                    fontSize: convertSize(height, (size) => size / 2.2) ?? "0",
                    position: "absolute",
                    top: "61%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "black",
                    fontWeight: "bold",
                }}
            >
                31
            </Typography>
        </div>
    );
};

// 以下ははそのままfontawesomeを使うだけなのでラップする必要はないのだが、他との統一性を考えてこっちの方がいいかなーと
export const ToDoListIcon = ({ height = "4em" }) => {
    return <FontAwesomeIcon icon={faList} style={{ height: height }} />;
};
export const StreamIcon = ({ height = "4em" }) => {
    return <FontAwesomeIcon icon={faStream} style={{ height: height }} />;
};
export const UsersIcon = ({ height = "4em" }) => {
    return <FontAwesomeIcon icon={faUsers} style={{ height: height }} />;
};
