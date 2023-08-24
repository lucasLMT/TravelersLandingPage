import { FC, useState, ReactElement } from "react";
import { useForm, Resolver } from "react-hook-form";

interface FormData {
  email: string;
}

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "Email is required.",
          },
        }
      : {},
  };
};

type ButtonAction = {
  state: "Pending" | "Sending" | "Success";
  message: string;
  image: ReactElement;
};

const PendingButton: ButtonAction = {
  state: "Pending",
  message: "Sign Up",
  image: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 pointer-events-none "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  ),
};

const SendingButton: ButtonAction = {
  state: "Sending",
  message: "Sending...",
  image: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6 animate-spin"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
};

const SuccessButton: ButtonAction = {
  state: "Success",
  message: "Thank you!",
  image: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6 ml-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  ),
};

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm<FormData>({ resolver });

  const [formBehavior, setFormBehavior] = useState<ButtonAction>(PendingButton);

  const SendDataToDataBase = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const onSubmit = handleSubmit(async (data: FormData) => {
    console.log(data); // Handle form data
    setFormBehavior(SendingButton);
    await SendDataToDataBase();
    setFormBehavior(SuccessButton);
  });

  //useEffect(() => {}, []);

  return (
    <form
      onSubmit={onSubmit}
      action=""
      id="contact-form"
      className="border-4 border-accent rounded-full p-1 flex items-center justify-between max-w-md mx-auto"
    >
      <input
        type="email"
        id="email"
        required
        placeholder="Email Address"
        className="p-2 mx-4 bg-transparent w-full text-sm flex-1 border-b-2 border-transparent rounded-none caret-accent placeholder:text-white focus:placeholder:text-muted focus:outline-none focus:border-accent"
        {...register("email")}
        style={{ display: formBehavior.state !== "Pending" ? "none" : "" }}
      />
      <label className="sr-only" htmlFor="email">
        Enter your email address
      </label>
      <button
        className="bg-accent text-bkg font-medium text-sm py-3 px-4 sm:px-8 rounded-full border border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-2 ring-offset-bkg hover:bg-accent/90 flex flex-x-2 space-x-1 shrink-0"
        disabled={formBehavior.state !== "Pending" ? true : false}
      >
        <span className="uppercase tracking-wide">{formBehavior.message}</span>
        {formBehavior.image}
      </button>
    </form>
  );
};

export default ContactForm;
