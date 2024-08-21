import { NextResponse } from 'next/server';

export async function GET(req: Request, res: NextResponse) {
  try {
    console.log('cron start');
    // console.log('updateResult', updateResult)
    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'error', err }, { status: 500 });
  }
}
