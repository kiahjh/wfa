import { FiArrowRight } from "solid-icons/fi";
import { createSignal, type Component } from "solid-js";
import Button from "./Button";
import TextInput from "./TextInput";

const LoginForm: Component = () => {
  const [email, setEmail] = createSignal(``);
  const [password, setPassword] = createSignal(``);

  return (
    <form
      class="bg-white/80 px-10 py-14 rounded-3xl shadow-xl shadow-cream-200/20 shrink-0 max-w-md"
      onSubmit={async (e) => {
        e.preventDefault();
        alert(`Login form submitted!`);
      }}
    >
      <h1 class="text-4xl font-poppins font-semibold text-center">Login</h1>
      <p class="mt-4 text-gray-500 text-lg text-center leading-6">
        Log into your account to schedule classes, view assigned homework, and
        more.
      </p>
      <p class="mt-4 text-gray-500 text-center leading-6 text-base">
        Don't have an account?{` `}
        <a href="/signup" class="text-blue-500 hover:underline">
          Sign up.
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
          Log in
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
