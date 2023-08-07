import { Pressable, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <Link href="/" asChild>
      <Pressable className="flex-1 items-center justify-center bg-white">
        <Text>Home</Text>
      </Pressable>
    </Link>
  );
}