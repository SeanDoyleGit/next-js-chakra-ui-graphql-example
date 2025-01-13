import { Avatar, Box, Button, Card, Center, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { type FormEvent, useState } from "react";

interface ProfilePageProps {
  username?: string;
  jobTitle?: string;
  onLogout: () => void;
  onUpdateProfile: (data: { username: string; jobTitle: string }) => void;
}

export default function ProfilePage({ username, jobTitle, onLogout, onUpdateProfile }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileEditSubmit = (data: { username: string; jobTitle: string }) => {
    onUpdateProfile(data);
    setIsEditing(false);
  };

  if (!username || !jobTitle) {
    return <Center h="100vh">Please login to view your profile</Center>;
  }

  return (
    <Center py={6}>
      <Card maxWidth={400} w="full" boxShadow="2xl" rounded="md" overflow="hidden">
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit="cover"
          alt="#"
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        {isEditing ? (
          <Box p={6}>
            <EditProfileForm onSubmit={handleProfileEditSubmit} />
          </Box>
        ) : (
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {username}
              </Heading>
              <Text color={"gray.500"}>{jobTitle}</Text>
            </Stack>

            <Button mt={8} variant="outline" w="full" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
            <Button w="full" mt={2} rounded="md" onClick={onLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Card>
    </Center>
  );
}

interface EditProfileFormProps {
  onSubmit: (data: { username: string; jobTitle: string }) => void;
}

const EditProfileForm = ({ onSubmit }: EditProfileFormProps) => {
  const [username, setUsername] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!username || !jobTitle) {
      return;
    }

    onSubmit({ username, jobTitle });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="username" isRequired mb={4}>
        <FormLabel>Username</FormLabel>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl id="jobTitle" isRequired>
        <FormLabel>Job Title</FormLabel>
        <Input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
      </FormControl>
      <Button type="submit" mt={8} w="full">
        Save Changes
      </Button>
    </form>
  );
};
