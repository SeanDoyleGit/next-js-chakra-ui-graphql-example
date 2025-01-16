import {
  Avatar,
  Box,
  Button,
  Card,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
} from "@chakra-ui/react";
import { type FormEvent, useState } from "react";

interface ProfilePageProps {
  username: string | null;
  jobTitle: string | null;
  avatarUrl: string | null;
  coverUrl: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  onLogout: () => void;
  onUpdateProfile: (data: { username: string; jobTitle: string }) => void;
}

export default function ProfilePage({
  username,
  jobTitle,
  avatarUrl,
  coverUrl,
  isLoggedIn,
  isLoading,
  onLogout,
  onUpdateProfile,
}: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleProfileEditSubmit = (data: { username: string; jobTitle: string }) => {
    onUpdateProfile(data);
    setIsEditing(false);
  };

  const isLoaded = !isLoading && isLoggedIn;

  return (
    <Center py={6}>
      <Card maxWidth={400} w="full" boxShadow="2xl" rounded="md" overflow="hidden">
        <Skeleton isLoaded={isLoaded} fadeDuration={0} h="120px" w="full" startColor="gray.400" endColor="gray.400">
          <Image h={"120px"} w={"full"} src={coverUrl ?? undefined} objectFit="cover" alt="#" />
        </Skeleton>
        <Center>
          <SkeletonCircle isLoaded={isLoaded} fadeDuration={0} w={24} h={24} mt={-12} startColor="gray.400" endColor="gray.400">
            <Avatar
              size={"xl"}
              src={avatarUrl ?? undefined}
              css={{
                border: "2px solid white",
              }}
            />
          </SkeletonCircle>
        </Center>

        {isEditing ? (
          <Box p={6}>
            <EditProfileForm onSubmit={handleProfileEditSubmit} onCancel={() => setIsEditing(false)} />
          </Box>
        ) : (
          <Box p={6}>
            <Stack spacing={1} align={"center"} mb={5}>
              <Skeleton isLoaded={isLoaded} fadeDuration={0}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  {isLoaded ? username : "Loading Username"}
                </Heading>
              </Skeleton>
              <Skeleton isLoaded={isLoaded} fadeDuration={0}>
                <Text color={"gray.500"}>{isLoaded ? jobTitle : "Loading Job Title"}</Text>
              </Skeleton>
            </Stack>

            <Button isLoading={!isLoaded} mt={8} variant="outline" w="full" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
            <Button isLoading={!isLoaded} w="full" mt={2} rounded="md" onClick={onLogout}>
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
