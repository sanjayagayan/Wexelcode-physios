import { Box, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <Box paddingTop={8}>
      <Typography fontSize={45} fontWeight="bold" align="center" marginBottom={5}>
        Learn More on Our Blog
      </Typography>
      <Box display={"flex"} justifyContent={"center"} gap={14}>
        <BlogCard
          title="Digital Health"
          imageUrl="/images/blog1.jpg"
          text="With lots of unique blocks, you can easily build a page without coding.
        Build your next landing page."
        />
        <BlogCard
        title="Physiotherapy"
        imageUrl="/images/blog2.jpg"
        text="With lots of unique blocks, you can easily build a page without coding.
        Build your next landing page."
      />
      <BlogCard
        title="German Health System"
        imageUrl="/images/blog3.jpg"
        text="With lots of unique blocks, you can easily build a page without coding.
        Build your next landing page."
      />
      </Box>
    </Box>
  );
};

export default Blog;
