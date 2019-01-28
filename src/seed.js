import face1 from './imagenes/face1.png'
import face2 from './imagenes/face2.png'

export const data =  {
    eventName: 'post apocalyptic highway',
    participants: [
        {
            position: 1,
            fullName: 'Angel Rodriguez',
            photo: face1,
            bib: 1085,
            age: 27,
            gender: 'M',
            time: '17:42',
            score: 41,
            events: [
                {
                    challenge: 'post apocalyptic highway',
                    activities: [
                        {
                          order: 1,
                          name: 'Hill Climb',
                          P: true,
                          R: true,
                          W: true,
                          F: true,
                          skillP: 20,
                          skillR: 40,
                          skillW: 100,
                          skillF: 0,
                          time: '17:90',
                          score: 8
                        },
                        {
                          order: 2,
                          name: 'Run For The Hills',
                          P: true,
                          R: true,
                          W: false,
                          F: false,
                          skillP: 20,
                          skillR: 40,
                          skillW: 100,
                          skillF: 0,
                          time: '17:90',
                          score: 8
                        },
                        {
                          order: 3,
                          name: 'Coded Doors',
                          P: true,
                          R: false,
                          W: true,
                          F: false,
                          skillP: 20,
                          skillR: 40,
                          skillW: 100,
                          skillF: 0,
                          time: '17:90',
                          score: 8
                        }
                    ]
                },
                {
                    challenge: 'Costa Ricas Canves',
                    activities: [
                        {
                          order: 1,
                          name: 'Hill Climb',
                          P: true,
                          R: true,
                          W: false,
                          F: true,
                          skillP: 20,
                          skillR: 40,
                          skillW: 100,
                          skillF: 0,
                          time: '17:90',
                          score: 8
                        },
                        {
                          order: 2,
                          name: 'Run For The Hills',
                          P: true,
                          R: false,
                          W: false,
                          F: true,
                          skillP: 20,
                          skillR: 40,
                          skillW: 100,
                          skillF: 0,
                          time: '17:90',
                          score: 8
                        }
                    ]
                }
            ]
        },
        {
            position: 2,
            fullName: 'Patrick Johnson',
            photo: face2,
            bib: 1085,
            age: 27,
            gender: 'M',
            time: '17:42',
            score: 41,
            events:[]
        }
    ]
}