import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router';

const NewsPage = () => {
    const category = useParams().category || 'all';

    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;
