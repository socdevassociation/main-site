import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import {
  AppShell,
  Header,
  MantineProvider,
  Navbar,
  Image,
  Title,
  NavLink,
} from "@mantine/core";
import Link from "next/link";
// import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <AppShell
        padding="md"
        header={
          <Header height={{ base: 120 }} className="flex flex-col">
            <Link href="/" className="flex items-center flex-1 gap-4">
              <Image src="/logo.svg" width={60} alt=""></Image>
              <Title>Socialist Developers Association</Title>
            </Link>
            {/* <Image src="/logo.svg" width={70} height={70} alt=""></Image> */}

            <div className="flex gap-8 text-2xl mb-2">
              {/* <NavLink component="a" href="/" label="About"></NavLink>
              <NavLink component="a" href="/work" label="Work"></NavLink>
              <NavLink component="a" href="/contact" label="Contact"></NavLink> */}
              <Link href="/about">About</Link>

              <Link href="/contact">Contact</Link>
            </div>
          </Header>
        }
      >
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  );
}
