
export const firebaseConfig = {
    apiKey: "AIzaSyBkoWkPNRorOCOgpZ5PsUb3qVvRUjIXihc",
    authDomain: "missbus-a70db.firebaseapp.com",
    databaseURL: "https://missbus-a70db-default-rtdb.firebaseio.com",
    projectId: "missbus-a70db",
    storageBucket: "missbus-a70db.appspot.com",
    messagingSenderId: "897706999658",
    appId: "1:897706999658:web:1a61952fb403e422c8af13",
    measurementId: "G-L64NY0E63N"
  };


export const COMPLAINTS_LINES = [
    {
        'id': '1',
        'value': '136',
    },
    {
        'id': '2',
        'value': '48',
    },
    {
        'id': '3',
        'value': '196',
    },
    {
        'id': '4',
        'value': '7'
    }
]

export const COMPLAINTS = [
    {
        'id': '1',
        'value': 'אוטובוס לא הגיע'
    },
    {
        'id': '2',
        'value': "אוטובוס איחר"
    }, 
    {
        'id': '3',
        'value': "אוטובוס הגיע ולא עצר"
    },
    {
        'id': '3',
        'value': "אחר"
    },
]

export const BUS_TIMES = {
    
    '136': [
        {'id': 1, 'value': '13:00',},
        {'id': 2, 'value': '13:20',},
        {'id': 3, 'value': '13:40',},
        {'id': 4, 'value': '14:00',},
        {'id': 5, 'value': '14:20',},
        {'id': 6, 'value': '14:40',}
    ],
    '48': [
        {'id': 1, 'value': '15:15'},
        {'id': 2, 'value': '15:30'},
        {'id': 3, 'value': '15:45'},
        {'id': 4, 'value': '16:00'},
        {'id': 5, 'value': '16:15'},
        {'id': 6, 'value': '16:30'}

    ],

    '196': [
        {'id': 1, 'value': '10:10'},
        {'id': 2, 'value': '10:20'},
        {'id': 3, 'value': '10:30'},
        {'id': 4, 'value': '10:40'},
        {'id': 5, 'value': '10:50'},
        {'id': 6, 'value': '11:00'},
        {'id': 7, 'value': '11:10'},
        {'id': 8, 'value': '11:20'},
        {'id': 9, 'value': '11:30'},
    ],
    '7': [
        {'id': 1, 'value': '05:10'},
        {'id': 2, 'value': '05:20'},
        {'id': 3, 'value': '05:30'},
        {'id': 4, 'value': '05:40'},
        {'id': 5, 'value': '05:50'},
        {'id': 6, 'value': '06:00'}
    ]
    
}

export const AGENCY_TO_COLOR = {
        "אגד תעבורה": "#008576",
        "מטרופולין": "#F28C1D",
        "דן בדרום": "#004C99",
        "אגד": "#008576",
        "דן באר שבע": "#004C99"
}



