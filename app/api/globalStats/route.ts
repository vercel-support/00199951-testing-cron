import { NextResponse } from 'next/server'
import prisma from '../../../prisma/prisma'

export async function GET(req: Request, res: NextResponse) {
  try {
    const globalStatsRes = await prisma.globalStats.findMany()

    console.log('globalStatsRes', globalStatsRes)

    const globalStats = globalStatsRes[0]

    if (!globalStats) {
      return NextResponse.json({ message: 'Not Found'}, { status: 404})
    }
    return NextResponse.json({ message: 'success', globalStats}, { status: 200})
  } catch (err) {
    return NextResponse.json({ message: 'error', err}, { status: 500})
  }
}
