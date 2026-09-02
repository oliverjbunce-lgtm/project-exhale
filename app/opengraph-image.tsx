import { ImageResponse } from "next/og";

export const alt = "Project Exhale — Science-based human performance";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#070a09",
          color: "#ebe7de",
          padding: "64px 72px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            right: -130,
            top: -100,
            borderRadius: "50%",
            background: "rgba(127,149,124,0.14)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 19,
              letterSpacing: "0.24em",
              fontWeight: 700,
            }}
          >
            <span>PROJECT</span>
            <span style={{ marginLeft: 17, color: "#a8b9a2", letterSpacing: "0.34em" }}>
              EXHALE
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", width: 820 }}>
              <div
                style={{
                  color: "#a8b9a2",
                  fontSize: 18,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                Science-based human performance
              </div>
              <div
                style={{
                  fontFamily: "Georgia, Times New Roman, serif",
                  fontSize: 76,
                  lineHeight: 0.98,
                  letterSpacing: "-0.045em",
                }}
              >
                Pressure is inevitable.
                <br />
                <span style={{ color: "#a8b9a2", fontStyle: "italic" }}>Staying there isn’t.</span>
              </div>
              <div
                style={{
                  width: 620,
                  marginTop: 30,
                  color: "rgba(235,231,222,0.72)",
                  fontSize: 21,
                  lineHeight: 1.5,
                }}
              >
                Practical strategies to regulate stress, restore capacity and perform with clarity.
              </div>
            </div>

            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                width: 160,
              }}
            >
              <div style={{ color: "#ebe7de", fontSize: 13, letterSpacing: "0.18em" }}>PRESSURE</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9, margin: "18px 0" }}>
                {[44, 52, 60, 68, 76, 84, 92, 100].map((width) => (
                  <div
                    key={width}
                    style={{
                      width,
                      height: 1,
                      background: "rgba(235,231,222,0.72)",
                    }}
                  />
                ))}
              </div>
              <div style={{ color: "#a8b9a2", fontSize: 13, letterSpacing: "0.18em" }}>RELEASE</div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
