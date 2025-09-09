import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PersonalAbout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">My Personal Interests</h1>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
            <p>
              This page is dedicated to all the non-professional aspects of my life.
              Here, you'll find insights into my hobbies, passions, and personal journey.
            </p>
            <p>
              Whether it's exploring new places, diving into a good book, or engaging in community activities,
              I believe these experiences are crucial for a well-rounded life.
            </p>
            <p>
              Feel free to explore and get to know the person behind the portfolio!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalAbout;
