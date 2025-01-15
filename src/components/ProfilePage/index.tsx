import { Avatar, Box, Button, Card, Center, Flex, FormControl, FormLabel, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { type FormEvent, useState } from "react";

interface ProfilePageProps {
  username: string | null;
  jobTitle: string | null;
  avatarUrl: string | null;
  coverUrl: string | null;
  onLogout: () => void;
  onUpdateProfile: (data: { username: string; jobTitle: string }) => void;
}

export default function ProfilePage({ username, jobTitle, avatarUrl, coverUrl, onLogout, onUpdateProfile }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileEditSubmit = (data: { username: string; jobTitle: string }) => {
    onUpdateProfile(data);
    setIsEditing(false);
  };

  if (!username || !jobTitle || !avatarUrl || !coverUrl) {
    return <Center h="100vh">Please login to view your profile</Center>;
  }

  return (
    <Center py={6}>
      <Card maxWidth={400} w="full" boxShadow="2xl" rounded="md" overflow="hidden">
        <Image h={"120px"} w={"full"} src={coverUrl} objectFit="cover" alt="#" />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={avatarUrl}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        {isEditing ? (
          <Box p={6}>
            <EditProfileForm onSubmit={handleProfileEditSubmit} onCancel={() => setIsEditing(false)} />
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
  onCancel: () => void;
}

const EditProfileForm = ({ onSubmit, onCancel }: EditProfileFormProps) => {
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
      <Button variant="outline" mt={8} w="full" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  );
};
