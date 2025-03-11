import { User } from "@/types/user";
import { cache } from "react";

export const getAuthorByFirstName = cache(async (firstName: string) => {
  const response = await fetch(
    `https://tenderdock-us.backendless.app/api/data/Users?where=%60firstName%60%20%3D%20'${firstName}'`
  );
  const user: User[] = await response.json();

  return user[0];
});