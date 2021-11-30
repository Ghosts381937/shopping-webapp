import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: "100%"
    },
    media: {
        height: "250px",
        width: "400px",
        paddingTop: "50%",
        
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