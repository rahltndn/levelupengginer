import Navbar from "@/components/Navbar";
import CoursesOverview from "@/components/CoursesOverview";
import Footer from "@/components/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <Navbar />
      <main className="pt-20">
        <CoursesOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
