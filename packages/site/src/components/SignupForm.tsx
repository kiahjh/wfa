import { FiArrowRight } from "solid-icons/fi";
import { createSignal, type Component } from "solid-js";
import Button from "./Button";
import TextInput from "./TextInput";
import signup from "@/lib/api-client/routes/signup";

const SignupForm: Component = () => {
  const [email, setEmail] = createSignal(``);
  const [password, setPassword] = createSignal(``);

  return (
    <form
      class="bg-white/80 px-10 py-14 rounded-3xl shadow-xl shadow-cream-200/20 shrink-0 max-w-md"
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await signup({ email: email(), password: password() });

        console.log(res);
      }}
    >
      <h1 class="text-4xl font-poppins font-semibold text-center">Sign up</h1>
      <p class="mt-4 text-gray-500 text-lg text-center leading-6">
        Create an account to schedule classes, view assigned homework, and more.
      </p>
      <p class="mt-4 text-gray-500 text-center leading-6 text-base">
        Already have an account?{` `}
        <a href="/dashboard" class="text-blue-500 hover:underline">
          Log in.
        </a>
      </p>
      <div class="flex flex-col gap-4 mt-8">
        <TextInput
          type="email"
          name="email"
          label="Email"
          value={email()}
          setValue={setEmail}
          placeholder="me@example.com"
        />
        <TextInput
          type="password"
          name="password"
          label="Password"
          value={password()}
          setValue={setPassword}
          placeholder="•••••••••"
        />
      </div>
      <div class="flex justify-end mt-8">
        <Button type="submit" variant="primary" size="lg" Icon={FiArrowRight}>
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
