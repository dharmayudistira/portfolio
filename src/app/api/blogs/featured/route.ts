import { NextResponse } from "next/server";
import { fetchFeaturedPosts } from "@/lib/hashnode";

export async function GET() {
  try {
    const featuredPosts = await fetchFeaturedPosts();

    return NextResponse.json(featuredPosts);
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch featured posts" },
      { status: 500 }
    );
  }
}
