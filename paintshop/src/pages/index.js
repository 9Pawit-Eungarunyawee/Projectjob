import Link from "next/link";
import * as React from "react";
import Login from "./login";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Homepage from "./homepage";

export default function App() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/login");
  }, [user]);
  return <>{user ? <Homepage /> : null}</>;
}
