import { NextRequest, NextResponse } from "next/server";
import { fetchPosts } from "@/lib/hashnode";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const first = parseInt(searchParams.get("first") || "9");
    const after = searchParams.get("after") || "";

    const posts = await fetchPosts({ first, after });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
