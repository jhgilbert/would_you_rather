export const INITIALIZE_LOADING = "INITIALIZE_LOADING"
export const COMPLETE_LOADING = "COMPLETE_LOADING"

export function initializeLoading () {
  return {
    type: INITIALIZE_LOADING,
  }
}

export function completeLoading () {
  return {
    type: COMPLETE_LOADING,
  }
}
