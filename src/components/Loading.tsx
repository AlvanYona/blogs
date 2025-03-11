import React from 'react'
import { EggFried } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <EggFried className="animate-ping size-24" />
    </div>
  )
}

export default Loading