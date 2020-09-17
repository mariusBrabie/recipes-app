export const selectStyles = {
    option: (provided, state) => ({
        padding: '1rem',
        background: state.isSelected ? '#105910' : 
            state.isFocused ? '#e1f0e1' : 'white',
        color: state.isSelected ? 'white' : '#555'
    }),
    control: (base, state) => ({
        ...base,
        boxShadow: 'none',
        borderColor: state.isFocused? '#105910' : '#ccc',
        '&:hover': { borderColor: '#105910', cursor: 'pointer' }
    })
}