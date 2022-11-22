import { Divider } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import LabeledParagraph from "../components/LabeledParagraph";
import TwoCol from "../components/TwoCol";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="font-mono flex flex-col items-center h-full justify-center">
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

      <div className="text-center">
        <h1 className="text-4xl font-bold">Coming Soon</h1>
        {/* <Divider my="lg"></Divider>
        <h3 className="text-3xl py-4">Keep up to date</h3>
        <iframe
          sandbox="allow-top-navigation allow-scripts"
          width="400"
          height="800"
          src="https://www.mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Fkolektiva.social%2Fusers%2Fsocdevassociation&theme=dark&size=100&header=true&replies=false&boosts=false"
        ></iframe> */}
      </div>
    </div>
  );
}
