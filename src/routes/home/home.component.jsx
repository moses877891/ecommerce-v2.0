import Directory from '../../components/directory/directory.component';

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Hats',
            imageUrl: 'https://images.unsplash.com/photo-1595642527925-4d41cb781653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=90'
        },
        {
            id: 2,
            title: 'Jackets',
            imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=90'
        },
        {
            id: 3,
            title: 'Sneakers',
            imageUrl: 'https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=90'
        }, {
            id: 4,
            title: 'Womens',
            imageUrl: 'https://images.unsplash.com/photo-1542594566-1bef784e1b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjZ8OTg1NTIyOHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=100'
        }, {
            id: 5,
            title: 'Mens',
            imageUrl: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fG1lbiUyMHdpZGV8ZW58MHx8MHx8&auto=format&fit=max&w=580&q=90'
        },
    ]

    return (
        <div>
            <Directory categories={categories} />
        </div>
    );
}

export default Home;