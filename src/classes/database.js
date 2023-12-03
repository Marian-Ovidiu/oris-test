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
                        name: 'Linclalor'
                    },
                    {
                        id: 2,
                        name: 'Sabor'
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
                        name: 'S'
                    },
                    {
                        id: 2,
                        name: 'M'
                    },
                    {
                        id: 3,
                        name: 'L'
                    },
                    {
                        id: 4,
                        name: '40'
                    },
                    {
                        id: 5,
                        name: '42'
                    },
                    {
                        id: 6,
                        name: '44'
                    },
                    {
                        id: 7,
                        name: '46'
                    },
                    {
                        id: 8,
                        name: '48'
                    },
                    {
                        id: 9,
                        name: '50'
                    },
                    {
                        id: 10,
                        name: '52'
                    },
                    {
                        id: 11,
                        name: 'Dai 3 ai 5 Anni'
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
                        name: '11-25'
                    },
                    {
                        id: 3,
                        name: '25-50'

                    },
                    {
                        id: 4,
                        name: 'Oltre 50'
                    }
                ]
            },
            {
                parentId: 4,
                label: 'Categorie',
                selected: false,
                filterData: [
                    {
                        id: 1,
                        name: 'Uomo'
                    },
                    {
                        id: 2,
                        name: 'Donna'
                    },
                    {
                        id: 3,
                        name: 'Bambini'

                    }
                ]
            },
        ];

        this.products = [
            {
                productId: 1,
                name: 'Pigiama',
                description: 'Pigiama Linclalor verde con pantalone a pois verdi e rosa, con taschine.',
                price: '38.00',
                imageUrl: '../assets/imgs/products-imgs/p1-1.jpeg',
                selected: false,
                data: {
                    'Composizione': {
                        'Composizione': '100% Cotone',
                    }
                },
                images: [
                    {
                        img: '../assets/imgs/products-imgs/p1-1.jpeg',
                        text: '',
                        description: ''
                    },
                    {
                        img: '../assets/imgs/products-imgs/p1-2.jpeg',
                        text: '',
                        description: ''
                    },
                    {
                        img: '../assets/imgs/products-imgs/p1-3.jpeg',
                        text: '',
                        description: ''
                    },
                    {
                        img: '../assets/imgs/products-imgs/p1-4.jpeg',
                        text: '',
                        description: ''
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [1]
                    },
                    {
                        typeFilter: 2,
                        filters: [4,5,6,7,8,9,10]
                    },
                    {
                        typeFilter: 3,
                        filters: [3]
                    }
                ]
            },
            {
                productId: 2,
                name: 'Pigiama',
                description: 'Pigiama a tema pinocchio, con pantalone scozzese verde.',
                price: '25.00',
                imageUrl: '../assets/imgs/products-imgs/p2-1.jpeg',
                selected: false,
                data: {
                    'Dettagli': {
                        'Composizione': '100% Cotone'
                    }
                },
                images: [
                    {
                        img: '../assets/imgs/products-imgs/p2-1.jpeg',
                        text: '',
                        description: ''
                    },
                    {
                        img: '../assets/imgs/products-imgs/p2-2.jpeg',
                        text: '',
                        description: ''
                    },
                    {
                        img: '../assets/imgs/products-imgs/p2-3.jpeg',
                        text: '',
                        description: ''
                    },
                    {
                        img: '../assets/imgs/products-imgs/p2-4.jpeg',
                        text: '',
                        description: ''
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [1,2,3]
                    },
                    {
                        typeFilter: 3,
                        filters: [2]
                    }
                ]
            },
            {
                productId: 3,
                name: 'Pigiama bambina',
                description: 'Pigiama bambina sabor nel colore blu scuro e azzurro',
                price: '14.00',
                imageUrl: '../assets/imgs/products-imgs/p3-1.jpeg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/products-imgs/p3-1.jpeg',
                        text: '',
                        description: ''
                    },
                    {
                        img: '../assets/imgs/products-imgs/p3-2.jpeg',
                        text: '',
                        description: ''
                    },
                    {
                        img: '../assets/imgs/products-imgs/p3-3.jpeg',
                        text: '',
                        description: ''
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 3,
                        filters: [2]
                    },
                    {
                        typeFilter: 4,
                        filters: [3]
                    }
                ]
            },
            {
                productId: 4,
                name: 'Pigiama bambina',
                description: 'Pigiama bimba della Sabor con Lilly e il vagabondo nel rosa scuro e rosa chiaro',
                price: '14.00',
                imageUrl: '../assets/imgs/products-imgs/p4-1.jpeg',
                selected: false,
                images: [
                    {
                        img: '../assets/imgs/products-imgs/p4-1.jpeg',
                        text: '',
                        description: ''
                    },
                    {
                        img: '../assets/imgs/products-imgs/p4-2.jpeg',
                        text: '',
                        description: ''
                    },
                    {
                        img: '../assets/imgs/products-imgs/p4-3.jpeg',
                        text: '',
                        description: ''
                    }
                ],
                filters: [
                    {
                        typeFilter: 1,
                        filters: [2]
                    },
                    {
                        typeFilter: 2,
                        filters: [11]
                    },
                    {
                        typeFilter: 3,
                        filters: [2]
                    },
                    {
                        typeFilter: 4,
                        filters: [3]
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