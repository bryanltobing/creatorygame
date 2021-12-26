import React from 'react'

import EmptyStateIllustration from 'assets/images/empty-state.svg'

const EmptyState = () => {
  return (
    <div className="py-8">
      <img
        className="w-48 h-48 object-contain mx-auto"
        src={EmptyStateIllustration}
      />
      <div className="mt-8 space-y-4 text-center">
        <h5 className="font-bold text-xl">No Result Found</h5>
        <p className="text-lightMuted">
          It seems we can’t find any results based on your search.
        </p>
      </div>
    </div>
  )
}

export default EmptyState
