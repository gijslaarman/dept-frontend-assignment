import caseData from '@/data/cases.json'

export const state = () => ({
  casesInitialData: caseData,
  cases: caseData,
  filter: {
    search: '',
    status: 'all',
  },
})

export const mutations = {
  filterCases(state, filter) {
    const category = filter.category

    if (category.toLowerCase() === 'all work') {
      return (state.cases = state.casesInitialData)
    } else {
      const newData = [...state.casesInitialData].filter(
        (item) => item.category === category
      )

      return (state.cases = newData)
    }
  },
}
