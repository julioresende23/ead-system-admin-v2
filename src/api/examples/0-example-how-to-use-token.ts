// exemplo: src/app/page.tsx (Next.js)
 
import UserApi from "@/api/user-api";
import ProfileApi from "@/api/profile-api";

// após login:
//setAuthToken("jwt_aqui");

// chamadas:
await UserApi.list();
await ProfileApi.create({ /* seu DTO */ } as any);
