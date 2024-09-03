import Image from "next/image";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Jadwal from "./components/Jadwal";
import Grid from "./components/Grid";
import ProgramTv from "./components/ProgramTv";
import GridVideo from "./components/GridVideo";
import Gridholiday from "./components/Gridholiday";
import Insert from "./components/Insert";
import KabarPemilu from "./components/KabarPemilu";
import FavoriteDrama from "./components/FavoriteDrama";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Jadwal/>
    <Grid/>
    <ProgramTv/>
    <GridVideo/>
    <Gridholiday/>
    <Insert/>
    <KabarPemilu/>
    <FavoriteDrama/>
    <Footer/>
    </>
  );
}
