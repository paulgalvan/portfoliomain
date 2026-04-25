import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resume = () => {
  const googleDriveFileId = "1qctR5Ypblh08vHHczz1RcNiXesJ1rSDf";
  const googleDriveEmbedUrl = `https://drive.google.com/file/d/${googleDriveFileId}/preview`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4"> 
          <iframe
            src={googleDriveEmbedUrl}
            className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto h-[130vh] border-0 shadow-lg"
            title="Resume PDF"
            style={{ border: 'none' }}
            allowFullScreen={true}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
