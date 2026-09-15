import { useState } from "react";
import ImageViewer from "./ImageViewer";

function ImageOpenButton({ src, fullSrc, alt = "", caption, children, className = "" }) {
    const [viewerImage, setViewerImage] = useState(null);
    const label = caption || alt || "Kep";

    return (
        <>
            <button
                type="button"
                className={`image-open-button ${className}`.trim()}
                onClick={() =>
                    setViewerImage({
                        src,
                        fullSrc: fullSrc || src,
                        alt,
                        caption,
                    })
                }
                aria-label={`${label} nagyitasa`}
            >
                {children}
            </button>

            <ImageViewer
                image={viewerImage}
                onClose={() => setViewerImage(null)}
            />
        </>
    );
}

export default ImageOpenButton;
