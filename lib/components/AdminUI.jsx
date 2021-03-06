import React from 'react'

import { Erc20AwardsControlCard } from 'lib/components/Erc20AwardsControlCard'
import { Erc721AwardsControlCard } from 'lib/components/Erc721AwardsControlCard'
import { FairnessControlsCard } from 'lib/components/FairnessControlsCard'
import { NumOfWinnersControlCard } from 'lib/components/NumOfWinnersControlCard'
import { RngServiceControlCard } from 'lib/components/RngServiceControlCard'
import { AwardPrizeCard } from 'lib/components/AwardPrizeCard'

export const AdminUI = (props) => {
  return (
    <>
      <AwardPrizeCard />
      <Erc20AwardsControlCard />
      <Erc721AwardsControlCard />
      <RngServiceControlCard />
      <NumOfWinnersControlCard />
      <FairnessControlsCard />
    </>
  )
}
