import type { CONTENT } from "@/lib/content";

export type Copy = (typeof CONTENT)[keyof typeof CONTENT];
