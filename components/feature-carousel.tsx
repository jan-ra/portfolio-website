"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureCarouselProps {
  features: Feature[];
}

export function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % features.length);
  };

  const prev = () => {
    setCurrent((current - 1 + features.length) % features.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, autoplay]);

  // Helper functions to get previous and next indices
  const getPrevIndex = () => (current - 1 + features.length) % features.length;
  const getNextIndex = () => (current + 1) % features.length;

  return (
    <div
      className="relative w-full max-w-sm mx-auto"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Carousel Container */}
      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Previous Image */}
        <div
          className="absolute left-0 transform -translate-x-1/2 opacity-50 scale-75 transition-all duration-500"
          style={{ width: "60%", height: "auto" }}
        >
          <Image
            src={features[getPrevIndex()].image || "/placeholder.svg"}
            alt={features[getPrevIndex()].title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Current Image */}
        <div
          className="relative w-full"
          style={{
            paddingTop: "177.78%", // 9:16 aspect ratio
          }}
        >
          <Image
            src={features[current].image || "/placeholder.svg"}
            alt={features[current].title}
            fill
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-all duration-500"
          />
        </div>

        {/* Next Image */}
        <div
          className="absolute right-0 transform translate-x-1/2 opacity-50 scale-75 transition-all duration-500"
          style={{ width: "60%", height: "auto" }}
        >
          <Image
            src={features[getNextIndex()].image || "/placeholder.svg"}
            alt={features[getNextIndex()].title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Text Below Image */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold mb-2">{features[current].title}</h3>
        <p className="text-muted-foreground text-sm">
          {features[current].description}
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                index === current ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => setCurrent(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}
