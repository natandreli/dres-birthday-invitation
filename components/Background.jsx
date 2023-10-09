import Image from "next/image";

export default function Background({ src, alt, children }) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "grid",
          gridGap: "0px",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gridTemplateRows: "repeat(auto-fit, minmax(400px, 1fr))",
          zIndex: "-1",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
        <div style={{ position: "relative" }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
        <div style={{ position: "relative" }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
