import Tyre from '@/database/tyres.model';
import { connectToDatabase } from '@/lib/mongoose';
import { TyresQuery } from '@/types';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const query = {} as TyresQuery;

    const { widthValue, heightValue, diameterValue, manufacturer } =
      await req.json();

    if (widthValue) {
      query.width = widthValue;
    }
    if (heightValue) {
      query.height = heightValue;
    }
    if (diameterValue) {
      query.diameter = diameterValue;
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
