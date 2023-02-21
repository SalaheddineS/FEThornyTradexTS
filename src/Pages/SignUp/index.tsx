import { TextInput, SimpleGrid, Group, Title, Button, Container, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { createStyles, SegmentedControl,Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';


const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  active: {
    backgroundImage:"gray",
  },

  control: {
    border: '0 !important',
  },

  labelActive: {
    color: `${theme.white} !important`,
  },
}));
export default function GetInTouchSimple() {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      lastname:'',
      address: '',
      message: '',
      city:''
    },
    validate: {
      name: (value) => value.trim().length < 2,
      lastname: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      address: (value) => value.trim().length === 0,
    },
  });

  return (
    <Container size={1040} my={40}>
    <form onSubmit={form.onSubmit(() => {})}>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        ThornyTradeEx
      </Title>
      <Title
        order={2}
        size="h2"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center">
            Sign Up
        </Title>
        
      
      <SegmentedControl
      radius="md"
      size="sm"
      data={['Male', 'Female','Mentaly challenged']}
      classNames={classes}
      mt="lg"
      sx={{ width: '100%' }}
    /><SimpleGrid cols={2} mt="sm" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="LastName"
          placeholder="Your LastName"
          name="lastname"
          variant="filled"
          {...form.getInputProps('lastname')}
        />
      </SimpleGrid>
      <TextInput
        label="Email"
        placeholder="Your email"
        name="email"
        variant="filled"
        mt="md"
        {...form.getInputProps('email')}
      />
      <TextInput
        label="City"
        placeholder="Your city"
        mt="md"
        name="city"
        variant="filled"
        {...form.getInputProps('city')}
      />
      <TextInput
        label="Address"
        placeholder="Address"
        mt="md"
        name="address"
        variant="filled"
        {...form.getInputProps('address')}
      />
       <NumberInput
        label="Phone"
        placeholder="Your phone number"
        mt="md"
        name="phone"
        variant="filled"
        {...form.getInputProps('phone')}
        hideControls
        minLength={10}
        maxLength={10}
        />
        <Dropzone
        mt="md"
      onDrop={() => {}}
      accept={IMAGE_MIME_TYPE}
      sx={(theme) => ({
        minHeight: 120,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

        '&[data-accept]': {
          color: theme.white,
          backgroundColor: theme.colors.blue[6],
        },

        '&[data-reject]': {
          color: theme.white,
          backgroundColor: theme.colors.red[6],
        },
      })}
    >
      <Text align="center">Profile Picture</Text>
    </Dropzone>
      <Group position="center" mt="xl">
        <Button type="submit" size="md" color={'gray'}>
          Sign Up
        </Button>
      </Group>
    </form>
    </Container>
  );
}