import Tyre from '@/database/tyres.model';
import { connectToDatabase } from '@/lib/mongoose';
import { TyresQuery } from '@/types';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const query = {} as TyresQuery;

    const { width, height, diameter, manufacturer } = await req.json();

    if (width) {
      query.width = width;
    }
    if (height) {
      query.height = height;
    }
    if (diameter) {
      query.diameter = diameter;
    }
    if (manufacturer) {
      query.manufacturer = manufacturer;
    }

    const result = await Tyre.find(query);
    return NextResponse.json({ success: true, tyres: result }, { status: 200 });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const tyres = await Tyre.find({});

    return NextResponse.json({ success: true, tyres }, { status: 200 });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
