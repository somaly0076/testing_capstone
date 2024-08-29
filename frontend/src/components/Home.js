import DeleteMeButton from "./DeleteMe";
import LogoutButton from "./Logout";

export default function Home() {
  return (
    <h1>
      Welcome to the Home Page
      <LogoutButton />
      <DeleteMeButton />
    </h1>
  );
}
