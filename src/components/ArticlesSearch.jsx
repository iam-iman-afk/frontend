import styled, { keyframes } from "styled-components";

/* ===================== ANIMATION ===================== */
const moveGradient = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

/* ===================== STYLE ===================== */
const Wrapper = styled.div`
  width: 100%;
  min-height: ${({ $height }) => $height || "300px"};
  height: ${({ $height }) => $height || "300px"};
  border-radius: ${({ $radius }) => $radius || "20px"};
  position: relative;
  overflow: hidden;

  background: ${({ $dark }) =>
    $dark
      ? "linear-gradient(135deg, #ff6a3d89, #ffb84c49, #7b2ff786, #2b86c589)"
      : "linear-gradient(135deg, #ff6a3d66, #ffb84c33, #8f51f420, #53a0fd33)"};

  background-size: 200% 200%;
  animation: ${moveGradient} 14s ease-in-out infinite;

  will-change: background-position; /* GPU Optimization */

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 30% 40%,
      rgba(255,255,255,0.2),
      transparent 60%
    );
    opacity: ${({ $dark }) => ($dark ? 0.35 : 0.18)};
    pointer-events: none;
  }
`;

/* ===================== COMPONENT ===================== */
export default function AnimatedGradient({ dark, height, radius, children }) {
  return (
    <Wrapper
      $dark={dark}
      $height={height}
      $radius={radius}
    >
      {children}
    </Wrapper>
  );
}