import InstagramSVG from "@/components/icons/InstagramSvg";
import LinkedinSvg from "@/components/icons/LinkedinSvg";
import ContainedButton from "@/components/ui/ContainedButton";
import { Box, Link, Typography } from "@mui/material";
import CustomAccordion from "@/components/ui/CustomAccordion";

const Faq = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingX: 12,
        marginTop: 14,
      }}
    >
      <div style={{ width: "60%" }}>
        <Typography fontSize={40} fontWeight="bold">
          FAQs
        </Typography>
        <Typography fontSize={22}>
          Feeling inquisitive? Have a read through some of our FAQs
        </Typography>
        <Typography fontSize={40} fontWeight="bold" marginTop={6}>
          Have more questions?
        </Typography>
        <Typography fontSize={22}>We would love to hear from you</Typography>
        <ContainedButton
          sx={{ width: 150, height: 45, marginTop: 2, marginBottom: 3 }}
        >
          Contact Us
        </ContainedButton>
        <Box display={"flex"} gap={3} paddingLeft={2.4}>
          <Link href={"#"}>
            <InstagramSVG />
          </Link>
          <Link href={"#"}>
            <LinkedinSvg />
          </Link>
        </Box>
      </div>
      <div>
        <CustomAccordion
          title="How does WexelCode personalize therapy plans work ?"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo"
        />
        <CustomAccordion
          title="Can I use WexelCode without any prior physiotherapy experience ?"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo"
        />
        <CustomAccordion
          title="Is my data secure with WexelCode ?"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo"
        />
        <CustomAccordion
          title="Are the  physiotherapists qualified ?"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo"
        />
        <CustomAccordion
          title="How often should I use WexelCode for maximum benefits ?"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo"
        />
        <CustomAccordion
          title="Is customer support available if I have questions or issues ?"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo"
        />
      </div>
    </Box>
  );
};

export default Faq;
