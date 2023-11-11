class database {

    constructor() {
        this.filters = [
            {
                parentId: 1,
                label: 'Brand',
                selected: false,
                filterData: [
                    {
                        id: 1,
                        name: 'Tommy Hilfiger'
                    },
                    {
                        id: 2,
                        name: 'Polo Ralph Lauren'
                    },
                    {
                        id: 3,
                        name: 'Hugo Boss'
                    }
                ]
            },
            {
                parentId: 2,
                label: 'Taglie',
                selected: false,
                filterData: [
                    {
                        id: 1,
                        name: '32'
                    },
                    {
                        id: 2,
                        name: '33'
                    },
                    {
                        id: 3,
                        name: '34'
                    },
                    {
                        id: 4,
                        name: '35'
                    },
                    {
                        id: 5,
                        name: '36'
                    },
                    {
                        id: 6,
                        name: '37'
                    }
                ]
            },
            {
                parentId: 3,
                label: 'Prezzo',
                selected: false,
                filterData: [
                    {
                        id: 1,
                        name: '0-10'
                    },
                    {
                        id: 2,
                        name: '11-50'
                    },
                    {
                        id: 3,
                        name: '50-150'

                    },
                    {
                        id: 4,
                        name: 'Oltre 150'
                    }
                ]
            },
        ];

        this.products = [
            {
                productId: 1,
                name: 'Prodotto 1',
                description: 'Descrizione del prodotto numero 1',
                price: '50.99',
                imageUrl: '../assets/imgs/fototest-1.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [1]
                    },
                    {
                        typeFilter: 2,
                        filters: [2]
                    },
                    {
                        typeFilter: 3,
                        filters: [3]
                    }
                ]
            },
            {
                productId: 2,
                name: 'Prodotto 2',
                description: 'Descrizione del prodotto 2',
                price: '79.99',
                imageUrl: '../assets/imgs/fototest-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [1]
                    },
                    {
                        typeFilter: 2,
                        filters: [2]
                    },
                    {
                        typeFilter: 3,
                        filters: [3]
                    }
                ]
            },
            {
                productId: 3,
                name: 'Prodotto 3',
                description: 'Descrizione del prodotto 3',
                price: '5.99',
                imageUrl: '../assets/imgs/fototest-3.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [1]
                    },
                    {
                        typeFilter: 2,
                        filters: [2]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 4,
                name: 'Prodotto 4',
                description: 'Descrizione del prodotto 4',
                price: '6.99',
                imageUrl: '../assets/imgs/slider-1.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [1]
                    },
                    {
                        typeFilter: 2,
                        filters: [3, 4]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 5,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 6,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 7,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 8,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 9,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 10,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 11,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 12,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 13,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 14,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 15,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 16,
                name: 'Prodotto 3',
                description: 'Descrizione del prodotto 3',
                price: '5.99',
                imageUrl: '../assets/imgs/fototest-3.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [1]
                    },
                    {
                        typeFilter: 2,
                        filters: [2]
                    },
                    {
                        typeFilter: 3,
                        filters: [3]
                    }
                ]
            },
            {
                productId: 17,
                name: 'Prodotto 4',
                description: 'Descrizione del prodotto 4',
                price: '6.99',
                imageUrl: '../assets/imgs/slider-1.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [1]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 18,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 19,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [3]
                    }
                ]
            },
            {
                productId: 20,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 21,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 22,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 23,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 24,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [3]
                    }
                ]
            },
            {
                productId: 25,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 26,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [1]
                    }
                ]
            },
            {
                productId: 27,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [2]
                    }
                ]
            },
            {
                productId: 28,
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    },
                    {
                        img: '../assets/imgs/fototest-1.jpg',
                        text: 'Testo di test 1',
                        description: 'Mini descrizione'
                    },
                    {
                        img: '../assets/imgs/fototest-2.jpg',
                        text: 'Testo di test 2',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
                    },
                    {
                        img: '../assets/imgs/fototest-3.jpg',
                        text: 'Testo di test 1',
                        description: null
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [3]
                    },
                    {
                        typeFilter: 3,
                        filters: [2]
                    }
                ]
            }
        ];
    }

    getFilters() {
        return this.filters;
    }

    getProducts() {
        return this.products;
    }
} exports.database = database;