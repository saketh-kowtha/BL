const RIDES = {
    "A1": [
        {
            time: 10,
            distance: 20
        },
        {
            time: 8,
            distance: 20
        },
        {
            time: 2,
            distance: 20
        },
        {
            time: 0,
            distance: 20
        },
        {
            time: null,
            distance: 20
        },
        {
            time: 'str',
            distance: 20
        },
        {
            time: '',
            distance: 20
        },
        {
            time: undefined,
            distance: 20
        },
        {
            time: NaN,
            distance: 20
        },
        {
            time: Infinity,
            distance: 20
        },
        {
            time: -1,
            distance: 20
        },
        {
            time: 3,
            distance: null
        },
        {
            time: 34,
            distance: 'str'
        },
        {
            time: '',
            distance: Infinity
        },
        {
            time: undefined,
            distance: undefined
        },
        {
            time: 1000,
            distance: NaN
        },
        {
            time: -1,
            distance: -100
        },
        {
            time: -1,
            distance: 5555555555555555555555
        },
    ],

    "A3": [
        {
            time: 10,
            distance: 20,
            type: "premium"
        },
        {
            time: 8,
            distance: 20,
            type: "premium"
        },
        {
            time: 10,
            distance: 20,
            type: "basic"
        },
        {
            time: 8,
            distance: 20,
            type: "basic"
        },
    ],
    "A4": 1,
    "A5": "User",
    "A6": NaN,
}

module.exports.getUserRidesInfo = (id) => {
    return RIDES[id]
}