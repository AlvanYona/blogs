import { User } from "@/types/user";
import { cache } from "react";

export const getAuthors = cache(async () => {
  const response = await fetch(
    `https://tenderdock-us.backendless.app/api/data/Users`
  );
  const user: User[] = await response.json();

  return user;
});