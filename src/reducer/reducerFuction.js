const intialState = {
    users: [
        {
            img: "./image/bandana.jpg",
            name: "bandana punk",
            id: 0,
            price: 8
        },
        {
            img: "./image/cyber.jpg",
            name: "cyber punk",
            id: 1,
            price: 13
        },

        {
            img: "./image/cigar.jpg",
            name: "cigar hat punk",
            id: 2,
            price: 9
        },
        {
            img: "./image/captain.jpg",
            name: "captain america punk",
            id: 3,
            price: 17
        },
        {
            img: "./image/pirate.jpg",
            name: "pirate king punk",
            id: 4,
            price: 20
        },
        {
            img: "./image/Green.jpg",
            name: "green tennis hulk punk",
            id: 5,
            price: 8
        }
    ],
    user: {
        img: "./image/Green.jpg",
        name: "green tennis hulk punk",
        id: 5,
        price: 8
    }

};

const ReducerFuction = (state = intialState, action) => {
    switch (action.type) {
        case "ADD":
            const User = state.users.filter((e) => e.id === action.id);
            return {
                user: { ...User[0] },
                users: [...state.users]
            }
        default:
            return state;
    }
}

export default ReducerFuction;
