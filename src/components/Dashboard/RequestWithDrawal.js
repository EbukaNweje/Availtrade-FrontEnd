import TopHeader from './TopHeader'
import HeaderMenu from "./HeaderMenu"
import BitconScr from "./BitconScr"
import Eze from './Eze'
import DepositDetail from "./DepositDetail"
import RequestWithDrawalBank from './RequestWithDrawalBank'

function RequestWithDrawal() {
  return (
    <div>
      <TopHeader />
      <BitconScr />
      <HeaderMenu />
      <BitconScr />
      <DepositDetail />
      <RequestWithDrawalBank />
      <Eze />
    </div>
  )
}

export default RequestWithDrawal
