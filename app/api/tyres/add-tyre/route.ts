import Tyre from '@/database/tyres.model';
import { connectToDatabase } from '@/lib/mongoose';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { width, height, diameter, manufacturer } = await req.json();

    const tyre = await Tyre.create({
      width,
      height,
      diameter,
      manufacturer,
    });

    return NextResponse.json({ success: true, tyre }, { status: 200 });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
