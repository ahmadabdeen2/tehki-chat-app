import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Channel as ChannelType } from "stream-chat";
import {
  Channel,
  MessageInput,
  MessageList,
  useChatContext,
} from "stream-chat-expo";

const ChannelScreen = () => {
  const { id } = useLocalSearchParams();

  const { client } = useChatContext();

  const [channel, setChannel] = useState<ChannelType>();


  


  useEffect(() => {
    const getChannel = async () => {
      const _id = typeof id === "string" ? id : id[0];
      const channels = await client.queryChannels({
        id: { $eq: _id },
      });
      setChannel(channels[0]);
    };
    getChannel();
  }, [id]);

  if (!channel) {
    return <ActivityIndicator />;
  }

  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
   
  );
};

export default ChannelScreen;
