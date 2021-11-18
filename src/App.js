// import { useState, useCallback } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    // const [category, setCategory] = useState('all');
    // const onSelect = useCallback((category) => setCategory(category), []);

    return (
        // <>
        //     <Categories category={category} onSelect={onSelect} />
        //     <NewsList category={category} />
        // </>
        <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/:category" element={<NewsPage />} />
        </Routes>
    );
};

export default App;
