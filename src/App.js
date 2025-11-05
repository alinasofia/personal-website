import Header from "./components/Header";
import Scene from "./components/Scene";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import ScrollButtons from "./components/ScrollButton";



function App() {
  return (
    <>
      <SideNav />
      <Header />
      <Scene />
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollButtons />
    </>
  );
}

export default App;
