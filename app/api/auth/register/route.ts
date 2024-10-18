import User from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { name, email, password } = await req.json();

    const isExisting = await User.findOne({ email });

    if (isExisting) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
