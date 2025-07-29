import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fine Thought',
  description: 'Web engineer & creative coder',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://p.typekit.net/p.css?s=1&k=awl2qrt&ht=tk&f=39498.42222.42224.42226&a=322146&app=typekit&e=css" />
        <style>{`
          @font-face {
            font-family:"neue-haas-grotesk-display";
            src:url("https://use.typekit.net/af/c7a282/00000000000000007735bb62/31/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/c7a282/00000000000000007735bb62/31/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/c7a282/00000000000000007735bb62/31/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
            font-display:auto;font-style:normal;font-weight:600;font-stretch:normal;
          }

          @font-face {
            font-family:"code-saver";
            src:url("https://use.typekit.net/af/56d6a7/00000000000000007735b602/31/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/56d6a7/00000000000000007735b602/31/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/56d6a7/00000000000000007735b602/31/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
            font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
          }

          @font-face {
            font-family:"code-saver";
            src:url("https://use.typekit.net/af/226447/00000000000000007735b607/31/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/226447/00000000000000007735b607/31/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/226447/00000000000000007735b607/31/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
            font-display:auto;font-style:normal;font-weight:500;font-stretch:normal;
          }

          @font-face {
            font-family:"code-saver";
            src:url("https://use.typekit.net/af/f58afe/00000000000000007735b60b/31/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/f58afe/00000000000000007735b60b/31/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/f58afe/00000000000000007735b60b/31/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
            font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
          }

          .tk-freight-big-pro { font-family: "freight-big-pro",serif; }
          .tk-neue-haas-grotesk-display { font-family: "neue-haas-grotesk-display",sans-serif; }
          .tk-code-saver { font-family: "code-saver",sans-serif; }

          html {
            font-family: "code-saver", monospace;
          }
        `}</style>
      </head>
      <body className="font-mono">{children}</body>
    </html>
  )
}
