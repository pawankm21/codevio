const question = {
    slug: String,
    title: String,
    description: String,
    id: Number,
    examples: [
        {
            id: Number,
            test_case: {
                input: String,
                output: String,
            },
            image: String,
            text: String,
        },
    ],
    constraints: [String],
}
const user = {
    id: String,
    name: String,
    email: String,
    avatar: String,
    questions_solved: [Number],
    active: Boolean,
    active_room:Number,
}
const room = {
    id: String,
    name: String,
    users: [user],
    questions: [question],
    active: Boolean,
}