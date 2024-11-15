"use client";

import { Box } from "@mui/material";
import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  appointmentId: string;
  token: string;
};

function VideoCallPageView({ appointmentId, token }: Readonly<Props>) {
  const router = useRouter();
  const { data: session } = useSession();
  let sessionContainer: HTMLDivElement | null = null;

  function joinSession() {
    if (sessionContainer) {
      const config = {
        videoSDKJWT: token,
        userName: session?.user.name,
        sessionName: appointmentId,
        features: ["video", "audio", "users", "chat", "share"],
        options: { init: {}, audio: {}, video: {}, share: {} },
      };
      uitoolkit.joinSession(sessionContainer, config);
      sessionContainer && uitoolkit.onSessionClosed(sessionClosed);
    }
  }

  const sessionClosed = () => {
    console.log("session closed");
    sessionContainer && uitoolkit.closeSession(sessionContainer);
    router.back();
  };

  useEffect(() => {
    if (!session?.user) {
      return;
    }
    sessionContainer = document.getElementById(
      "sessionContainer"
    ) as HTMLDivElement;
    joinSession();
  }, [session]);

  return (
    <Box maxHeight={100} display={"flex"} justifyContent={"center"}>
      <div
        id="sessionContainer"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          maxHeight: "100vh",
          transform: "scale(0.7)",
          transformOrigin: "top center",
        }}
      ></div>
    </Box>
  );
}

export default VideoCallPageView;
