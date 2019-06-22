const initialState = {
    burgers: [
        {
            _id: '5cf3cc93e3ce2d325c1a8fb2',
            ingredients: [
              {
                _id: '5cf3cc93e3ce2d325c1a8fae',
                'default': false,
                quantity: 8,
                name: 'Bacon',
                price: 2,
                createdAt: '2019-06-02T13:18:11.925Z',
                updatedAt: '2019-06-02T13:18:11.962Z',
                __v: 0
              },
              {
                _id: '5cf3cc93e3ce2d325c1a8faf',
                'default': false,
                quantity: 6,
                name: 'Alface',
                price: 0.4,
                createdAt: '2019-06-02T13:18:11.936Z',
                updatedAt: '2019-06-02T13:18:11.966Z',
                __v: 0,
                burger: '5cf3cc93e3ce2d325c1a8fb2'
              },
              {
                _id: '5cf3cc93e3ce2d325c1a8fb0',
                'default': false,
                quantity: 12,
                name: 'Queijo',
                price: 1.5,
                createdAt: '2019-06-02T13:18:11.943Z',
                updatedAt: '2019-06-02T13:18:11.968Z',
                __v: 0,
                burger: '5cf3cc93e3ce2d325c1a8fb2'
              },
              {
                _id: '5cf3cc93e3ce2d325c1a8fb1',
                'default': false,
                quantity: 11,
                name: 'Hambúrguer de carne',
                price: 3,
                createdAt: '2019-06-02T13:18:11.948Z',
                updatedAt: '2019-06-02T13:18:11.970Z',
                __v: 0,
                burger: '5cf3cc93e3ce2d325c1a8fb2'
              }
            ],
            offers: [
              {
                _id: '5cf1c9586eda6720f4945fad',
                name: 'Muita carne',
                description: 'A cada 3 porções de carne o cliente só paga 2',
                createdAt: '2019-06-01T00:39:52.374Z',
                updatedAt: '2019-06-01T00:39:52.374Z',
                __v: 0
              },
              {
                _id: '5cf1c9586eda6720f4945fae',
                name: 'Muito queijo',
                description: 'A cada 3 porções de queijo o cliente só paga 2',
                createdAt: '2019-06-01T00:39:52.374Z',
                updatedAt: '2019-06-01T00:39:52.374Z',
                __v: 0
              }
            ],
            discount: 15,
            name: 'X-Tudo',
            price: 54.4,
            createdAt: '2019-06-02T13:18:11.958Z',
            updatedAt: '2019-06-02T13:18:11.958Z',
            __v: 0
          }
    ]
}

export default function burgersReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_BURGUER':
            return {
                ...state,
                burgers: [ ...state.burgers, action.payload ]
            }
        default: 
            return state
    }
}