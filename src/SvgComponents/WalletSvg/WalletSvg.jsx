import * as React from "react"

const WalletSvg = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#EDF8F8">
      <path d="M19.678 11.692H9.649A2.05 2.05 0 0 0 7.45 13.55v.007a2.06 2.06 0 0 0 2.235 1.866l-.007.001h10a.476.476 0 0 0 .517-.44v-2.852a.509.509 0 0 0-.503-.441h-.015ZM9.649 14.723a1.192 1.192 0 1 1 1.192-1.191v.003c0 .657-.532 1.188-1.188 1.188h-.004ZM2.76.5v5.337H3.9v-2.28c.115.028.249.046.385.051h.004a1.56 1.56 0 0 0 1.555-1.554 1.749 1.749 0 0 0-.055-.4l.002.012h6.243c-.03.126-.047.255-.051.385v.003a1.56 1.56 0 0 0 1.554 1.555 1.97 1.97 0 0 0 .402-.055l-.013.003v2.28h1.168V.5H2.76Zm12.824 4.688h1.451a1.889 1.889 0 0 0-1.439-1.241l-.012-.002v1.243Z" />
      <path d="M9.574 11.07h9.948V8.04a1.722 1.722 0 0 0-1.848-1.555h.006-15.8a.08.08 0 0 0-.051-.026.678.678 0 0 1-.389-.568v-.002a.738.738 0 0 1 .54-.646l.004-.001V3.92C.895 3.973.014 5.527.014 7.47v11.476A1.723 1.723 0 0 0 1.86 20.5h-.006 15.8a1.72 1.72 0 0 0 1.84-1.547v-3.037H9.601c-1.606 0-2.902-1.09-2.902-2.41 0-1.347 1.295-2.435 2.875-2.435Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.014 .5)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export { WalletSvg }