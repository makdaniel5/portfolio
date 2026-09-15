import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "../styles/tools/imageviewer.css";

function ImageViewer({ image, onClose }) {
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (!image) return;

        closeButtonRef.current?.focus();
        document.body.style.overflow = "hidden";

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [image, onClose]);

    if (!image) {
        return null;
    }

    return createPortal(
        <div
            className="image-viewer-backdrop"
            onClick={onClose}
        >
            <div
                className="image-viewer-modal"
                role="dialog"
                aria-modal="true"
                aria-label="Kép nagyított nézete"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    className="image-viewer-close"
                    onClick={onClose}
                    aria-label="Nagyított kép bezárása"
                >
                    ×
                </button>

                <img
                    src={image.fullSrc || image.src}
                    alt={image.alt || ""}
                    className="image-viewer-large-image"
                />

                {image.caption && (
                    <p className="image-viewer-caption">
                        {image.caption}
                    </p>
                )}
            </div>
        </div>,
        document.body
    );
}

export default ImageViewer;
