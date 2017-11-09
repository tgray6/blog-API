const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('common'));

const blogPostsRouter = require('./blogPostsRouter');


app.use('/blog-posts', blogPostsRouter);
// you need to import `blogPostsRouter` router and route
// requests to HTTP requests to `/blog-posts` to `blogPostsRouter`

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
