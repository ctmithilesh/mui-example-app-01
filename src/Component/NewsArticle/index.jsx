import { Typography } from "@material-ui/core";
import React from "react";

export default function NewsArticle() {
  return (
    <>
      <Typography variant="h1" component="h2" gutterBottom>
        Apple sells $5.25 billion in five-part dollar bond sale
      </Typography>
      <Typography variant="body1" gutterBottom>
        Apple sold bonds in a five-part, $5.25 billion deal which was originally
        targeted at about $5 billion.The longest portion, a 30-year bond, will
        yield 108 basis points over comparable Treasuries, less than the roughly
        135 basis points initially discussed
      </Typography>
    </>
  );
}
