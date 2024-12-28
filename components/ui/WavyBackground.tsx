"use client";

import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
  waveWidth = 50,
  backgroundFill = "#000319",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  key?: string;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Detect Safari
  const isSafari =
    typeof navigator !== "undefined" &&
    /Safari/.test(navigator.userAgent) &&
    !/Chrome/.test(navigator.userAgent);

  // Speed calculation
  const getSpeed = () => (speed === "slow" ? 0.001 : 0.002);

  // Canvas initialization
  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;

    return { canvas, ctx };
  };

  // Wave drawing logic
  const drawWave = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    nt: number
  ) => {
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth;
      ctx.strokeStyle = colors[i % colors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  // Rendering logic
  const render = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    nt: number
  ) => {
    ctx.fillStyle = backgroundFill;
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);
    drawWave(ctx, w, h, nt);
  };

  // Main animation effect
  useEffect(() => {
    const canvasSetup = initCanvas();
    if (!canvasSetup) return;

    const { canvas, ctx } = canvasSetup;
    let nt = 0;
    let animationId: number;

    const animate = () => {
      if (!ctx) return;
      render(ctx, canvas.width, canvas.height, (nt += getSpeed()));
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [blur, colors, speed, waveOpacity, waveWidth, backgroundFill]);

  return (
    <div
      className={cn(
        "flex relative flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="right-0 left-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      ></canvas>
      <div className={cn("absolute z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;
