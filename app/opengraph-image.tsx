import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "TK Khoirul Wildan";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#DCEFFD,#FFF1BF)", color: "#1F3347" }}>
        <div style={{ fontSize: 84, fontWeight: 800 }}>TK Khoirul Wildan</div>
        <div style={{ fontSize: 40, marginTop: 20 }}>Tempat Tumbuh, Bermain, dan Belajar dengan Bahagia</div>
      </div>
    ),
    size
  );
}