export const mainColor = "#FFB84E";
export const strongMainColor = "#EF8640";
export const LinkCFont = "Kaisei HarunoUmi, serif";
export const LinkC = () => (
    <span style={{ fontFamily: LinkCFont }}>Link C</span>
);
export const ColoredLinkC = () => (
    <span style={{ color: strongMainColor }}>
        <LinkC />
    </span>
);
