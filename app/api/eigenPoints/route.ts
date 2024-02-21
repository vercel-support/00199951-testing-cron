import { NextResponse } from 'next/server'
import axios from 'axios'


export async function GET(req: Request, res: NextResponse) {
  try {
    // eslint-disable-next-line max-len
  const { data: { [0]: firstResult } } = await axios.get(`https://goerli.eigenlayer.xyz/api/trpc/native.userPodSummary,tokenStaking.getRestakingPoints,withdrawal.getUncompletedWithdrawalsForWithdrawerForAllTokens,userAgreement.getUserAgreement?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22address%22%3A%220xd0d04148dC54a12d0b9C44173a039070Ca62B17F%22%7D%7D%2C%221%22%3A%7B%22json%22%3A%7B%22staker%22%3A%220xd0d04148dC54a12d0b9C44173a039070Ca62B17F%22%7D%7D%2C%222%22%3A%7B%22json%22%3A%7B%22withdrawer%22%3A%220xd0d04148dC54a12d0b9C44173a039070Ca62B17F%22%7D%7D%2C%223%22%3A%7B%22json%22%3A%7B%22address%22%3A%220xd0d04148dC54a12d0b9C44173a039070Ca62B17F%22%7D%7D%7D`)
  console.log('getEigenLayerStats', firstResult.result.data.json.summary)

  const eigenLayerPointsApi = firstResult.result.data.json.summary.restakingPoints

    console.log('updateResult', eigenLayerPointsApi)
    return NextResponse.json({ message: 'success', eigenLayerPointsApi}, { status: 200})
  } catch (err) { 
    return NextResponse.json({ message: 'error', err}, { status: 500})
  }
  
  }
