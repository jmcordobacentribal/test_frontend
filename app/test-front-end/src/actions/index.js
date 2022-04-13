export const setList = (payload) => ({
    type: "SET_HERO",
    payload,
})

export const filterUser = (payload) => (
    {
        type: 'FILTER',
        payload,
    }
);

