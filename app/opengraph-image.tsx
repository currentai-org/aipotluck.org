import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #f7f0e6 0%, #e8d8c4 40%, #d4b89c 100%)",
          color: "#14110d",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p
          style={{
            fontSize: 20,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            opacity: 0.6,
            marginBottom: 16,
          }}
        >
          Current AI
        </p>
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {site.meta.title}
        </div>
        <p
          style={{
            marginTop: 28,
            fontSize: 28,
            maxWidth: 900,
            textAlign: "center",
            lineHeight: 1.35,
            opacity: 0.9,
          }}
        >
          {site.hero.subtitle}
        </p>
      </div>
    ),
    { ...size },
  );
}
