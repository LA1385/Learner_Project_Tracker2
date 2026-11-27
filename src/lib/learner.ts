export type Day = {
    submitted: boolean;
    reviewed: boolean;
};

export type Learner = {
    id: number;
    name: string;
    days: Day[];
    submissionRate: number | null; // null = N/A (no days yet)
};

export const learners: Learner[] = [
    {
        id: 1,
        name: 'Luqman Ahmad',
        submissionRate: 57.1,
        days: [
            { submitted: true, reviewed: true },
            { submitted: false, reviewed: false },
            { submitted: true, reviewed: false },
            { submitted: true, reviewed: true },
            { submitted: false, reviewed: false },
            { submitted: true, reviewed: false },
            { submitted: false, reviewed: false }
        ]
    },
    {
        id: 2,
        name: 'Oluwaseyi Glory',
        submissionRate: 71.4,
        days: [
            { submitted: true, reviewed: true },
            { submitted: true, reviewed: false },
            { submitted: false, reviewed: false },
            { submitted: true, reviewed: true },
            { submitted: true, reviewed: false },
            { submitted: false, reviewed: false },
            { submitted: true, reviewed: true }
        ]
    },
    {
        id: 3,
        name: 'Chinedu Okafor',
        submissionRate: 85.7,
        days: [
            { submitted: true, reviewed: true },
            { submitted: true, reviewed: true },
            { submitted: true, reviewed: false },
            { submitted: true, reviewed: true },
            { submitted: false, reviewed: false },
            { submitted: true, reviewed: false },
            { submitted: true, reviewed: true }
        ]
    },
    {
        id: 4,
        name: 'Sarah binti Ali',
        submissionRate: null,
        days: []
    },
    {
        id: 5,
        name: 'Tunde Adeyemi',
        submissionRate: 0,
        days: [
            { submitted: false, reviewed: false },
            { submitted: false, reviewed: true },
            { submitted: false, reviewed: false },
            { submitted: false, reviewed: false },
            { submitted: false, reviewed: true },
            { submitted: false, reviewed: false },
            { submitted: false, reviewed: false }
        ]
    },
    {
        id: 6,
        name: 'Aisha binti Yusuf',
        submissionRate: 42.9,
        days: [
            { submitted: true, reviewed: false },
            { submitted: false, reviewed: false },
            { submitted: true, reviewed: true },
            { submitted: true, reviewed: false },
            { submitted: false, reviewed: false },
            { submitted: false, reviewed: true },
            { submitted: false, reviewed: false }
        ]
    },
    {
        id: 7,
        name: 'John Doe',
        submissionRate: 42.9,
        days: [
            { submitted: true, reviewed: true },
            { submitted: true, reviewed: false },
            { submitted: false, reviewed: false },
            { submitted: false, reviewed: false },
            { submitted: true, reviewed: true },
            { submitted: false, reviewed: false },
            { submitted: false, reviewed: false }
        ]
    },
    {
        id: 8,
        name: 'Jane Smith',
        submissionRate: 28.6,
        days: [
            { submitted: true, reviewed: false },
            { submitted: true, reviewed: true },
            { submitted: false, reviewed: false },
            { submitted: false, reviewed: false },
            { submitted: false, reviewed: true },
            { submitted: false, reviewed: false },
            { submitted: false, reviewed: true }
        ]
    }
];