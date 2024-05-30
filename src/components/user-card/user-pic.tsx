interface UserPicProps {
  imageUrl: string | undefined;
}

export default function UserPic({ imageUrl }: UserPicProps) {
  return (
    <div className="bg-white/50 h-12 w-12 rounded-full overflow-hidden">
      <img
        src={imageUrl}
        alt="User Avatar"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
