import UserPic from "./user-pic.tsx"

export default function UserCard() {
  return (
    <div className="flex items-center">
      <UserPic />
      <h4 className="ml-6 font-gabarito-medium text-lg">
        User name
      </h4>
    </div>
  )
}
