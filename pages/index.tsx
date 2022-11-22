import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import LabeledParagraph from "../components/LabeledParagraph";
import TwoCol from "../components/TwoCol";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="font-mono">
      <LabeledParagraph label="Who We Are">
        We are a not-for-profit organization of leftist tech workers united
        under the common goal of using technology to further the cause of
        socialism. We stand for the principles of equality, solidarity,
        cooperation, and democracy.
      </LabeledParagraph>

      {/* <LabeledParagraph label="What We Do">
        We develop websites and web applications for clients who share our
        values. We also provide hosting services for these clients. We are
        committed to providing our services on a free/pay-what-you-want basis to
        our our clients.
      </LabeledParagraph> */}

      {/* <p className="text-xl font-mono">
        By developing for clients and providing hosting services, we aim to
        challenge the notion that people will only work if they have a profit
        incentive.
      </p> */}
    </div>
  );
}
