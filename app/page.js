import { Suspense } from "react";
import LocationDetector from "./components/LocationDetector";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LocationDetector />
      </Suspense>
    </div>
  );
}
