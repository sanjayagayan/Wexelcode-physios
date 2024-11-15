import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  imageUrl: string;
  text: string;
};
const BlogCard = ({ title, imageUrl, text }: Props) => {
  return (
    <div style={{ width: "280px" }}>
      <Typography fontWeight="bold">{title}</Typography>
      <Image
        src={imageUrl}
        alt={""}
        width={280}
        height={180}
        style={{ marginBottom: 12, marginTop: 12 }}
      />
      <Typography sx={{ opacity: 0.7, fontSize: 14, paddingRight: 3 }}>
    {text}
      </Typography>
      <Link href={"#"}>
        <Typography
          sx={{
            color: "#A51008",
            fontSize: 14,
            paddingRight: 3,
            marginTop: 2.4,
          }}
        >
          Learn more
        </Typography>
      </Link>
    </div>
  );
};

export default BlogCard;
