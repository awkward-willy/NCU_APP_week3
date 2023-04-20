import React from "react";
import { NativeBaseProvider, Box, VStack, HStack } from "native-base";
import { Alert, Button, TextInput, Text, Image } from "react-native";

const Login = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [IDnum, setIDnum] = React.useState("");
  return (
    <NativeBaseProvider>
      <VStack space={5} alignItems="center" marginTop={10}>
        <Box height={200} width={200} alignItems="center">
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 25 }}
            source={require("../assets/normal.jpg")}
          />
        </Box>
        <Text>By Willy_Awkward</Text>
        <HStack space={2} alignItems="center">
          <Text>姓名：</Text>
          {/* TextInput for name */}
          <TextInput
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="name"
            style={{
              width: 200,
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
            }}
          />
        </HStack>
        {/* TextInput for ID number */}
        <HStack space={2} alignItems="center">
          <Text>學號：</Text>
          <TextInput
            onChangeText={(ID) => setIDnum(ID)}
            value={IDnum}
            placeholder="ID"
            keyboardType="numeric"
            style={{
              width: 200,
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
            }}
          />
        </HStack>

        {/* Button for Register */}
        <Button
          title="註冊"
          onPress={() => {
            if (name.trim().length === 0 || IDnum.trim().length === 0) {
              Alert.alert("姓名及學號不得為空");
            } else {
              navigation.navigate("LoginSuccess", { name, IDnum });
            }
          }}
        />
      </VStack>
    </NativeBaseProvider>
  );
};

export default Login;
