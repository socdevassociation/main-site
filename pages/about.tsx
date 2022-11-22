import LabeledParagraph from "../components/LabeledParagraph";

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      <LabeledParagraph label="Who We Are">
        We are a not-for-profit organization of leftist tech workers united
        under the common goal of using technology to further the cause of
        socialism. We stand for the principles of equality, solidarity,
        cooperation, and democracy.
      </LabeledParagraph>
    </div>
  );
}
