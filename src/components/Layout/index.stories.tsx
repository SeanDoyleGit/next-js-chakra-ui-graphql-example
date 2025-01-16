import type { Meta, StoryObj } from "@storybook/react";

import { DEFAULT_AVATAR_URL } from "@/constants";
import { Center, Text } from "@chakra-ui/react";
import { LayoutUI } from "./index";

const meta: Meta<typeof LayoutUI> = {
  component: LayoutUI,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const children = (
  <Center>
    <Text>
      Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean fermentum consequat aliquam purus facilisi diam vulputate phasellus
      pharetra. Natoque congue risus eu et maecenas eleifend. Nostra dolor malesuada pharetra urna condimentum ligula? Maecenas nullam proin
      suscipit, dignissim parturient venenatis convallis? Eros quisque a dapibus vivamus fames. Lectus mus ex leo faucibus pharetra curae
      tempus. Praesent molestie pretium accumsan vitae nec praesent. Duis ridiculus nullam aenean pharetra semper urna dictum ridiculus.
      Parturient ridiculus fringilla finibus nam a. Eu mattis inceptos sollicitudin sagittis ornare sociosqu dictum mus. Platea vehicula
      egestas ligula luctus convallis lobortis posuere. Est facilisi et; bibendum maecenas dignissim condimentum convallis lectus. Eros ad
      varius cras sodales luctus elementum. Pretium et eu facilisi augue nostra tincidunt nec, torquent tristique. Ultrices cras accumsan
      sapien non posuere fames rhoncus. Natoque malesuada ultrices placerat aenean lobortis imperdiet mauris. Tristique suscipit mauris elit
      cras ex integer curae nisl tincidunt? Ipsum magna curabitur venenatis montes curabitur convallis. Ex donec ex est tempor; duis class.
      Justo ultrices condimentum tellus amet ad dolor; mauris netus senectus. In egestas eget nostra accumsan mauris; venenatis lacus ex.
      Odio placerat ligula elit erat porttitor, morbi litora fames. Ex netus purus, vehicula volutpat sit adipiscing. Feugiat mattis luctus
      leo nostra; mi dis nisi. Primis massa facilisi pharetra natoque potenti fusce natoque senectus id. Nam dis molestie adipiscing
      habitant adipiscing aliquam sagittis dis. Leo orci augue libero fermentum nec felis potenti. Ligula neque eget vehicula bibendum
      turpis ex praesent odio. Donec sollicitudin ultricies eget molestie libero varius suspendisse. Semper luctus commodo etiam ligula
      donec. Vel hac pulvinar hendrerit mus; rhoncus torquent velit. Elementum integer tellus velit luctus vestibulum class rutrum. Luctus
      tortor habitasse vehicula, a erat facilisi urna quam. Duis aptent et mattis mattis; ornare senectus mus. Nascetur blandit nec; nullam
      quam habitant ultricies. Lectus natoque suscipit felis tristique fusce aenean efficitur. Adipiscing eleifend suspendisse dignissim mus
      adipiscing quam ante. Netus morbi orci mus faucibus fermentum augue. Consectetur lacinia phasellus class per, sagittis massa
      scelerisque. Habitasse eros rutrum sem sodales inceptos augue. Luctus arcu diam scelerisque nec velit porta. Bibendum scelerisque
      magna suscipit aptent cubilia torquent quis himenaeos. Lobortis purus potenti efficitur primis lorem dis efficitur malesuada.
      Vulputate dis platea sed hendrerit vehicula, etiam per dapibus. Senectus pharetra posuere nibh, gravida laoreet maecenas. Tincidunt
      parturient eget vulputate lacus penatibus dictum. Viverra magna elementum euismod accumsan placerat erat maecenas ultricies. Fringilla
      non cursus turpis quam laoreet praesent facilisis. Himenaeos montes eget at convallis nibh magnis. Id elit dolor conubia pretium dolor
      montes sit adipiscing. Duis varius magna imperdiet id vehicula libero class vivamus. Rhoncus sed libero libero et malesuada fames.
      Justo facilisi dui urna fringilla interdum in eget laoreet. Mi velit pretium ac facilisis augue aliquet volutpat. Diam ante maecenas
      vitae, est turpis pharetra montes. Enim auctor auctor est mus inceptos. Porttitor nibh bibendum potenti vulputate per dolor amet netus
      eros. Iaculis cursus ante pellentesque tempor commodo taciti porttitor dolor class. Metus sociosqu ultrices accumsan dui ad ante augue
      morbi. Iaculis tortor cras purus tempus placerat hac molestie congue. Sagittis hendrerit tellus tempor diam elementum habitasse. Dui
      elementum tempor ante aenean himenaeos, class facilisis feugiat. Convallis ex himenaeos aliquam himenaeos suscipit in laoreet. At
      taciti vulputate quis nulla faucibus eget maecenas nullam. Magnis eros fames nunc lacinia pellentesque. Mi scelerisque vel conubia
      tincidunt quisque dapibus semper nibh platea. Laoreet ultrices aliquet consectetur fames gravida taciti. Ex pretium nulla ad; varius
      nec aenean dui. Penatibus sed sit consequat ligula proin condimentum habitant urna arcu. Interdum interdum velit maecenas montes, cras
      risus venenatis. Elementum bibendum placerat felis hendrerit ac. Vulputate nascetur nulla quam imperdiet ultricies dui. Class
      pellentesque dis posuere varius nunc suspendisse. Fusce vitae faucibus sit ridiculus etiam a. Convallis netus non ultrices ultrices
      imperdiet vulputate aliquam. Tellus dolor molestie in; ultricies fusce fames euismod ipsum. Massa tortor laoreet quis; diam posuere
      vestibulum. At condimentum penatibus faucibus fringilla suspendisse urna erat felis. Class enim nisl blandit donec arcu magnis id
      felis arcu. Suspendisse consectetur efficitur purus suspendisse convallis.
    </Text>
  </Center>
);

export const Unauthenticated: Story = {
  args: {
    children,
  },
};

export const Authenticated: Story = {
  args: {
    username: "Sean Doyle",
    avatarUrl: DEFAULT_AVATAR_URL,
    children,
  },
};
