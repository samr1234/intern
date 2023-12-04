import { Spinner } from "@material-tailwind/react";

function FullScreenLoader() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-30 overflow-hidden bg-black opacity-90 flex flex-col items-center justify-center">
      <Spinner color="pink" className="h-10 w-10" />
      <p className="mt-4 text-center text-white">
        This may take a few seconds
      </p>
    </div>
  );
}

export default FullScreenLoader;