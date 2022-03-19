import {
  Box,
  Card,
  makeStyles,
  Typography,
  Button,
  Input,
} from "@material-ui/core";
import React from "react";

const usestyles = makeStyles({
  card: {
    margin: "10px",
    padding: "10px",
    border: "1px solid black",
  },
  button: {
    marginRight: "10px",
  },
});

const QuestionCard = (props) => {
  const classes = usestyles();
  return (
    <Box>
      <Card className={classes.card} elevation={0}>
        <Typography variant="h5" color="primary">
          Description of Question
        </Typography>
        <Typography variant="h6">By Panda Garg</Typography>
        <Typography variant="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <Card
          className={classes.card}
          style={{ display: "flex", alignItems: "center" }}
          elevation={0}
        >
          <Button variant="contained" className={classes.button}>
            Upvote
          </Button>
          <Button variant="contained" className={classes.button}>
            Downvote
          </Button>
          <input
            type="text"
            placeholder="Reply..."
            style={{ width: "50%" }}
            disableUnderline
            multiline
            fullWidth
          />
        </Card>
        <Card
          className={classes.card}
          style={{ maxHeight: "300px", overflow: "scroll" }}
          elevation={0}
        >
          <Box>
            <Typography variant="h6" color="primary">
              Reply by Chirag Jindal
            </Typography>
            <Typography variant="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="primary">
              Reply by Chirag Jindal
            </Typography>
            <Typography variant="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="primary">
              Reply by Chirag Jindal
            </Typography>
            <Typography variant="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="primary">
              Reply by Chirag Jindal
            </Typography>
            <Typography variant="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </Typography>
          </Box>
        </Card>
      </Card>
    </Box>
  );
};

export default QuestionCard;
