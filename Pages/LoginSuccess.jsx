import React from "react";
import { NativeBaseProvider, VStack } from "native-base";
import { Text } from "react-native";

const LoginSuccess = ({ route, navigation }) => {
  const { name, IDnum } = route.params;
  return (
    <NativeBaseProvider>
      <VStack space={10} alignItems="center" marginTop={10}>
        <Text>姓名：{name}</Text>
        <Text>學號：{IDnum}</Text>
      </VStack>
    </NativeBaseProvider>
  );
};

export default LoginSuccess;
