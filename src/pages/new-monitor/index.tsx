import { NextPage } from 'next'
import NewMonitorView from 'src/views/new-monitor'

interface NewMonitorProps {}

const NewMonitor: NextPage<NewMonitorProps> = () => {
  return (
    <>
      <NewMonitorView />
    </>
  )
}

export default NewMonitor
