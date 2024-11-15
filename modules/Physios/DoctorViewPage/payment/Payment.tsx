import Row from "@/components/ui/Row";
import { Box, Divider, Typography } from "@mui/material";
import { numberToCurrency } from "utils/currency";
import { truncateText } from "utils/strings";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ENVIRONMENT from "@/config/environment";

const stripePromise = loadStripe(ENVIRONMENT.STRIPE_PUBLIC_KEY);

type Props = {
  appointmentId: string;
  doctorName: string;
  doctorSpecialty: string;
  totalAmount: number;
  appointmentDate: string;
  appointmentTime: string;
  note?: string;
};
const Payment = ({
  appointmentId,
  doctorName,
  doctorSpecialty,
  totalAmount,
  appointmentDate,
  appointmentTime,
  note,
}: Props) => {
  const cents = +totalAmount.toFixed(2) * 100;
  return (
    <>
      <Box
        width="50%"
        borderRight="2px dashed"
        boxSizing="border-box"
        paddingRight={20}
      >
        <Typography
          fontWeight="700"
          fontSize="22px"
          marginTop={2}
        >{`Dr. ${truncateText(doctorName, 50)}`}</Typography>
        <Typography
          color="#A51008"
          fontWeight="500"
          fontSize="17"
          marginBottom={4}
        >
          {doctorSpecialty}
        </Typography>
        <Divider flexItem />
        <Row marginTop={4} marginBottom={2}>
          <Typography fontWeight="600">Date</Typography>
          <Typography fontWeight="600">{appointmentDate}</Typography>
        </Row>
        <Row marginBottom={3}>
          <Typography fontWeight="600">Time</Typography>
          <Typography fontWeight="600">{appointmentTime}</Typography>
        </Row>
        <Divider flexItem />
        <Row marginTop={4}>
          <Typography fontWeight="600">Total</Typography>
          <Typography fontWeight="600" fontSize={30}>
            {numberToCurrency(totalAmount)}
          </Typography>
        </Row>
      </Box>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: cents,
          currency: "usd",
        }}
      >
        <Checkout
          appointmentId={appointmentId}
          amount={cents}
        />
      </Elements>
    </>
  );
};

export default Payment;
