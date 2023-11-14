// shadcn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// components
import { Login, Register } from "@/components/user";

const LoginPage = () => {
  return (
    <div>
      <p className="text-center">Get authenticated as a normal user here</p>
      <Tabs defaultValue="login" className="max-w-sm mx-auto my-10">
        <TabsList className="mx-auto flex flex-1">
          <TabsTrigger className="w-full text-lg" value="register">
            Register
          </TabsTrigger>
          <TabsTrigger className="w-full text-lg" value="login">
            Login
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="register">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginPage;
