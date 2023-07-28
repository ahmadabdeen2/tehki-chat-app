import { Stack } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";
import Colors from "../../constants/Colors";

const API_KEY = process.env.EXPO_PUBLIC_STREAM_CHAT_API_KEY;
const API_SECRET = process.env.EXPO_PUBLIC_STREAM_CHAT_API_SECRET;
const client = StreamChat.getInstance(API_KEY);

export default function Layout() {
  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: "ahmad",
          name: "Ahmad",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("ahmad")
      );

      const channel = client.channel("livestream", "public", {
        name: "Live Stream",
      });

      await channel.create();
    };

    connectUser();

    return () => {
      client.disconnectUser();
    };
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: "Chat",
            }}
          />
        </Stack>
      </Chat>
    </OverlayProvider>
  );
}
