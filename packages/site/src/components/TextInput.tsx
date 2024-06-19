import { Show, type Component } from "solid-js";

interface Props {
  value: string;
  setValue: (value: string) => void;
  type: "text" | "email" | "password";
  placeholder?: string;
  name: string;
  label?: string;
}

const TextInput: Component<Props> = ({
  value,
  setValue,
  type,
  placeholder,
  name,
  label,
}) => (
  <div class="flex flex-col gap-0.5">
    <Show when={label}>
      <label for={name} class="text-gray-400 ml-4">
        {label}
      </label>
    </Show>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder ?? ``}
      onInput={(e) => setValue(e.currentTarget.value)}
      value={value}
      class="border-[0.5px] text-xl px-4 py-2 rounded-xl shadow shadow-black/5 bg-white placeholder:text-gray-300"
    />
  </div>
);

export default TextInput;
