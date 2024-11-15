"use client";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingButton from "@/components/ui/LoadingButton";
import ENVIRONMENT from "@/config/environment";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  appointmentId: string;
  amount: number;
};
const Checkout = ({ amount, appointmentId }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!appointmentId || !session || clientSecret) {
      return;
    }
    //TODO: use axios
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, appointmentId, userId: session?.user.id }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [appointmentId, amount, session, clientSecret]);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${ENVIRONMENT.APP_URL}/appointments/${appointmentId}/payment-success`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <Box width="50%" paddingX={8} paddingBottom={6}>
      <Typography component="h2" fontWeight="600" fontSize={20}>
        Payment
      </Typography>
      <Divider
        flexItem
        sx={{ backgroundColor: "#000000", marginBottom: 4, marginTop: 1 }}
      />
      {clientSecret ? (
        <form onSubmit={handleFormSubmit}>
          <PaymentElement />
          {errorMessage && (
            <Typography color="red" marginTop={1.5}>
              {errorMessage}
            </Typography>
          )}
          <LoadingButton
            fullWidth
            type="submit"
            disabled={loading || !stripe}
            loading={loading}
            sx={{
              marginTop: 5,
              backgroundColor: "#000000",
              height: "48px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#000000",
                opacity: 0.7,
              },
            }}
          >
            {loading ? "Processing" : "Confirm Payment"}
          </LoadingButton>
        </form>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Checkout;
