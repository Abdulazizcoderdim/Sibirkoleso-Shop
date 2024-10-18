import User from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';
import { compare } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
    }

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
