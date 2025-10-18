"use client"
import { useTheme } from "next-themes";
import Image from "next/image";

export function Logo() {
    const size = 64
    return <Image src="/logo-light.png" alt="Logo" width={size} height={size} />
}