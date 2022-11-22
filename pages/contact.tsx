import FormInput from "../components/FormInput";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form action="/contact">
        <FormInput label="Name" type="text" placeholder=""></FormInput>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols={30} rows={10} />
      </form>
    </div>
  );
}
