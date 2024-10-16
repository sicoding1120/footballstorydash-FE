import { User } from '@nextui-org/user'

export default function UserElement({ username }: { username: string }) {
  return (
    <User
      name={username}
      description={"sdhgfuiegsdge"}
      avatarProps={{
        src: 'https://i.pravatar.cc/150?u=a04258114e29026702d'
      }}
    />
  )
}
