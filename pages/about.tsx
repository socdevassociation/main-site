import LabeledParagraph from "../components/LabeledParagraph";

export default function About() {
  return (
    <div className="flex flex-col gap-8 text-center max-w-4xl m-auto">
      <LabeledParagraph label="Who We Are">
        We are a not-for-profit organization of leftist tech workers united
        under the common goal of using technology to further the ideals of
        socialism. We stand for the principles of equity, solidarity,
        cooperation, and democracy.
      </LabeledParagraph>
      {/* <LabeledParagraph label="Who We Are Not">
        We are not a group intent on owning the internet.
        <br />
        We are not a union, though you should join one.
        <br />
      </LabeledParagraph> */}
    </div>
  );
}
