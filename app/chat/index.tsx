import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  Channel,
  ChannelList,
  MessageInput,
  MessageList,
} from "stream-chat-expo";
import { Channel as ChannelType } from "stream-chat";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {
  

  const router = useRouter();



  return (
    <ChannelList
      onSelect={(channel) => {
        router.push(`/chat/channel/${channel.id}`);
      }}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
