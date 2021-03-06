import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: "100%"
    },
    media: {
        height: "300px",
        width: "100%"
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end"
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between"
    },
    cardContentName: {
        display: "flex",
        justifyContent: "center"
    }
}));