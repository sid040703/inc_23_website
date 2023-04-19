import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { slides, advancedSlides } from "../static/slides";

export default function BasicExample() {
  const [basicExampleOpen, setBasicExampleOpen] = React.useState(false);
  const [advancedExampleOpen, setAdvancedExampleOpen] = React.useState(false);

  return (
    <>
      <p>
        Full-blown example with most of the plugins enabled (Captions,
        Fullscreen, Slideshow, Thumbnails, Video, Zoom).
      </p>

      <Lightbox
        open={advancedExampleOpen}
        close={() => setAdvancedExampleOpen(false)}
        slides={advancedSlides}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />

      <button onClick={() => setAdvancedExampleOpen(true)} >result</button>

      <p>
        Basic example demonstrating lightbox core features with no plugins.
      </p>

      <Lightbox
        open={basicExampleOpen}
        close={() => setBasicExampleOpen(false)}
        slides={slides}
      />

      <button onClick={() => setBasicExampleOpen(true)} />
    </>
  );
}