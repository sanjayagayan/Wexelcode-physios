import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#A51008" }}>
      <Box width={"100%"} color={"#ffffff"}>
        <Box
          display={"flex"}
          justifyContent="space-around"
          paddingTop={6}
          paddingBottom={3.5}
          marginTop={8}
        >
          <div>
            <Link href="/">
              <Image src={"/images/logo2.png"} alt="" width={80} height={50} />
            </Link>
            <Typography sx={{ fontWeight: "700" }} marginTop={1}>
              Wexelcode GmbH
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>
              Maisacher Str. 118
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>
              82256 Fürstenfeldbruck, Germany
            </Typography>
          </div>
          <div>
            <Typography
              sx={{ fontWeight: "700" }}
              fontSize={20}
              marginBottom={2}
            >
              Contact
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>
              Phone : +49 _______________
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>
              Fax : +49 __________________
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>
              Email : contact@wexelcode.de
            </Typography>
          </div>
          <div>
            <Typography
              sx={{ fontWeight: "700" }}
              fontSize={20}
              marginBottom={2}
            >
              Company
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>About</Typography>
            <Typography sx={{ fontWeight: "300" }}>Pricing</Typography>
            <Typography sx={{ fontWeight: "300" }}>Blog</Typography>
          </div>
          <div>
            <Typography
              sx={{ fontWeight: "700" }}
              fontSize={20}
              marginBottom={2}
            >
              Help
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>FAQ</Typography>
            <Typography sx={{ fontWeight: "300" }}>Contact</Typography>
          </div>
        </Box>
        <Box paddingY={2} sx={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 1)" }}>
          <Typography align="center" fontSize={13}>
            Data Privacy •Imprint •Terms & Conditions •Contact us
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
