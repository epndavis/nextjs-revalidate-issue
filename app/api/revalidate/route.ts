import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
 
export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag') as string|null;

  if (tag) {
    revalidateTag(tag)
  }

  const path = request.nextUrl.searchParams.get('path') as string|null;

  if (path) {
    revalidatePath(path)
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
