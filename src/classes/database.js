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
                name: 'Prodotto 1',
                description: 'Descrizione del prodotto 1',
                price: '50.99',
                imageUrl: '../assets/imgs/fototest-1.jpg',
                selected: false,
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
                name: 'Prodotto 2',
                description: 'Descrizione del prodotto 2',
                price: '79.99',
                imageUrl: '../assets/imgs/fototest-2.jpg',
                selected: false,
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
                name: 'Prodotto 3',
                description: 'Descrizione del prodotto 3',
                price: '5.99',
                imageUrl: '../assets/imgs/fototest-3.jpg',
                selected: false,
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
                name: 'Prodotto 4',
                description: 'Descrizione del prodotto 4',
                price: '6.99',
                imageUrl: '../assets/imgs/slider-1.jpg',
                selected: false,
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
                name: 'Prodotto 5',
                description: 'Descrizione del prodotto 5',
                price: '9.99',
                imageUrl: '../assets/imgs/slider-2.jpg',
                selected: false,
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
            }
        ];
    }

    getFilters(){
        return this.filters;
    }

    getProducts(){
        return this.products;
    }
} exports.database = database;