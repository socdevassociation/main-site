import FormInput from "../components/FormInput";
import { useForm } from "@mantine/form";
import { Box, Group, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";

export default function Contact() {
  const [hasSent, setHasSent] = useState(false);

  const contactForm = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async (values) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.log(error);
    }

    console.log("handle submit", values);
    setHasSent(true);
    contactForm.reset();
  };

  return (
    <div>
      <Box sx={{ maxWidth: 800 }} mx="auto">
        {!hasSent ? (
          <form onSubmit={contactForm.onSubmit(handleSubmit)}>
            {/* <FormInput label="Name" type="text" placeholder=""></FormInput>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={30} rows={10} /> */}
            <TextInput
              withAsterisk
              label="Name"
              name="name"
              {...contactForm.getInputProps("name")}
            />
            <TextInput
              withAsterisk
              label="Email"
              name="email"
              {...contactForm.getInputProps("email")}
            />
            <Textarea
              withAsterisk
              label="Message"
              name="message"
              {...contactForm.getInputProps("message")}
            />
            <Group position="right" mt="md">
              <button type="submit">Submit</button>
            </Group>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center">Thank you!</h1>
            <h2 className="text-xl">
              We&apos;ll get back to you as soon as we can.
            </h2>
          </div>
        )}
      </Box>
    </div>
  );
}
