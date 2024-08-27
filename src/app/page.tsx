import Image from "next/image";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Jadwal from "./components/Jadwal";
import Grid from "./components/Grid";
import ProgramTv from "./components/ProgramTv";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Jadwal/>
    <Grid/>
    <ProgramTv/>
    </>
  );
}
