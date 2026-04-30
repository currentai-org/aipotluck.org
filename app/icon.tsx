import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14110d",
          color: "#f7f0e6",
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        AI
      </div>
    ),
    { ...size },
  );
}
